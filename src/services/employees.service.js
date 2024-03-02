import { PrismaClient } from '@prisma/client'
import { NoRecordFound } from '../configs/Responses.js';
import { exclude, base64Tobuffer } from "../utils/helper.js"

const prisma = new PrismaClient()

const xprisma = prisma.$extends({
    result: {
        employee: {
            imageBase64: {
                needs: { image: true },
                compute(employee) {
                    return employee.image ? new Buffer(employee.image, 'binary').toString('base64') : null
                },
            },
        },
    },
})

async function getPaginated(req) {
    const { pageNumber, dataPerPage, branchId, active, searchKey } = req.query
    const totalCount = await xprisma.employee.count({
        where: {
            branchId: branchId ? parseInt(branchId) : undefined,
            active: active ? Boolean(active) : undefined,
            OR: [
                {
                    name: {
                        contains: searchKey,
                    },
                },
                {
                    regNo: {
                        contains: searchKey,
                    },
                },
                {
                    EmployeeCategory: {
                        name: {
                            contains: searchKey,
                        }
                    },
                },
                {
                    chamberNo: {
                        contains: searchKey,
                    },
                },
            ],
        },
    })
    const data = await xprisma.employee.findMany({
        skip: (parseInt(pageNumber) - 1) * parseInt(dataPerPage),
        take: parseInt(dataPerPage),
        where: {
            branchId: branchId ? parseInt(branchId) : undefined,
            active: active ? Boolean(active) : undefined,
            OR: [
                {
                    name: {
                        contains: searchKey,
                    },
                },
                {
                    regNo: {
                        contains: searchKey,
                    },
                },
                {
                    EmployeeCategory: {
                        name: {
                            contains: searchKey,
                        }
                    },
                },
                {
                    chamberNo: {
                        contains: searchKey,
                    },
                },
            ],
        },
        include: {
            EmployeeCategory: true
        }
    })
    return { statusCode: 0, data: data.map((d) => exclude({ ...d }, ["image"])), totalCount };
}

async function get(req) {
    const { branchId, active, employeeCategory } = req.query
    const data = await xprisma.employee.findMany({
        where: {
            branchId: branchId ? parseInt(branchId) : undefined,
            active: active ? Boolean(active) : undefined,
            EmployeeCategory: {
                name: employeeCategory
            }
        },
        include: {
            department: {
                select: {
                    name: true
                }
            },
            EmployeeCategory: true
        }
    })
    return { statusCode: 0, data: data.map((item) => exclude({ ...item }, ["image"])) };
}


async function getOne(id) {
    const data = await xprisma.employee.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            permCity: {
                select: {
                    id: true
                }
            },
            localCity: {
                select: {
                    id: true
                }
            },
            empId :{
                select: {
                    id: true
                }
            },
            department: {
                select: {
                    id: true
                }
            },
            EmployeeCategory: true
        }
    })
    if (!data) return NoRecordFound("Employee");
    return { statusCode: 0, data: exclude({ ...data }, ["image"]) };
}

async function getSearch(req) {
    const searchKey = req.params.searchKey
    const { branchId, active } = req.query
    const data = await xprisma.employee.findMany({
        where: {
            branchId: branchId ? parseInt(branchId) : undefined,
            active: active ? Boolean(active) : undefined,
            OR: [
                {
                    name: {
                        contains: searchKey,
                    },
                },
                {
                    regNo: {
                        contains: searchKey,
                    },
                },
                {
                    department: {
                        name: {
                            contains: searchKey,
                        }
                    },
                },
                {
                    chamberNo: {
                        contains: searchKey,
                    },
                },
            ],
        },
        include: {
            department: {
                select: {
                    name: true
                }
            },
            EmployeeCategory: true
        }
    })
    return { statusCode: 0, data: data.map((item) => exclude({ ...item }, ["image"])) };
}

async function create(req) {
    const image = req.file
    const { branchId, name, email, chamberNo, joiningDate, fatherName, dob, gender, maritalStatus, bloodGroup,
        panNo, consultFee, salaryPerMonth, commissionCharges, mobile, accountNo, ifscNo, branchName, degree,
        specialization, localAddress, localCity, localPincode, permAddress, permCity,
        permPincode, department, employeeCategoryId, permanent, active ,empId} = await req.body

    const branch = await prisma.branch.findUnique({
        where: {
            id: parseInt(branchId)
        }
    })
    let latestData;
    let employeeId;

    if (branch.prefixCategory === "Default") {
        latestData = await prisma.employee.findFirst({
            where: {
                branchId: parseInt(branchId)
            },
            orderBy: {
                id: 'desc',
            }
        });
        employeeId = branch.idPrefix + "/" + (latestData ? parseInt(latestData.regNo.split("/")[1]) + 1 : parseInt(branch.idSequence) + 1);
    } else {
        latestData = await prisma.employee.findFirst({
            where: {
                branchId: parseInt(branchId),
                permanent: permanent ? JSON.parse(permanent) : false
            },
            orderBy: {
                id: 'desc',
            }
        });
        let prefix = permanent ? JSON.parse(permanent) : false ? branch.idPrefix : branch.tempPrefix;
        let sequenceNumber = (latestData
            ? parseInt(latestData.regNo.split("/")[1]) + 1
            : parseInt(permanent ? JSON.parse(permanent) : false ? branch.idSequence : branch.tempSequence) + 1);
        employeeId = prefix + "/" + sequenceNumber;
    }
    const data = await prisma.employee.create(
        {
            data: {
                regNo: employeeId,
                EmployeeCategory: { connect: { id: parseInt(employeeCategoryId) } },
                Branch: { connect: { id: parseInt(branchId) } },
                name, email, chamberNo, fatherName, dob: dob ? new Date(dob) : null, joiningDate: dob ? new Date(joiningDate) : null, gender, maritalStatus,
                department: department ? {
                    connect: { id: parseInt(department) }
                } : undefined,
                active: active ? JSON.parse(active) : undefined,
                bloodGroup, panNo, consultFee, salaryPerMonth, commissionCharges, mobile: mobile ? parseInt(mobile) : null, accountNo: accountNo,
                ifscNo, branchName, degree, specialization, localAddress, localCity: { connect: { id: parseInt(localCity) } }, localPincode: localPincode ? parseInt(localPincode) : null, permAddress,
                permCity: permCity ? { connect: { id: parseInt(permCity) } } : undefined, permPincode: permPincode ? parseInt(permPincode) : null,
                image: image ? image.buffer : undefined,
                permanent: permanent ? JSON.parse(permanent) : undefined,
                empId:empId
            }
        }
    )
    return { statusCode: 0, data: exclude({ ...data }, ["image"]) };
}

async function update(id, req) {
    const image = req.file
    const { name, email, regNo, chamberNo, joiningDate, fatherName, dob, gender, maritalStatus, bloodGroup,
        panNo, consultFee, salaryPerMonth, commissionCharges, mobile, accountNo, ifscNo, branchName, degree,
        specialization, localAddress, localCity, localPincode, permAddress, permCity, permPincode, department, employeeCategoryId, active,
        leavingReason, leavingDate, canRejoin, rejoinReason, isDeleteImage } = await req.body
    const dataFound = await prisma.employee.findFirst({
        where: {
            id: parseInt(id),
        },
    })
    let removeImage = isDeleteImage ? JSON.parse(isDeleteImage) : false;
    if (!dataFound) return NoRecordFound("Employee");
    const data = await prisma.employee.update({
        where: {
            id: parseInt(id),
        },
        data:
        {
            name, email, regNo, chamberNo, fatherName, dob: dob ? new Date(dob) : undefined, joiningDate: dob ? new Date(joiningDate) : undefined, gender, maritalStatus,
            bloodGroup, panNo, consultFee, salaryPerMonth, commissionCharges, mobile: mobile ? parseInt(mobile) : undefined, accountNo: accountNo,
            ifscNo, branchName, degree, specialization, localAddress,
            image: image ? image.buffer : (removeImage ? null : undefined),
            localCityId: localCity ? parseInt(localCity) : undefined,
            permCityId: permCity ? parseInt(permCity) : undefined,
            departmentId: department ? parseInt(department) : undefined,
            localPincode: localPincode ? parseInt(localPincode) : undefined, permAddress,
            permPincode: permPincode ? parseInt(permPincode) : undefined,
            employeeCategoryId: employeeCategoryId ? parseInt(employeeCategoryId) : undefined, active: active ? JSON.parse(active) : undefined,
            leavingDate: leavingDate ? new Date(leavingDate) : undefined, leavingReason, rejoinReason,
            canRejoin: canRejoin ? JSON.parse(canRejoin) : undefined
        },
    })
    return { statusCode: 0, data: exclude({ ...data }, ["image"]) };
};

async function remove(id) {
    const data = await prisma.employee.delete({
        where: {
            id: parseInt(id)
        },
    })
    return { statusCode: 0, data };
}


export {
    get,
    getPaginated,
    getOne,
    getSearch,
    create,
    update,
    remove
}
