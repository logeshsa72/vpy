import { PrismaClient } from '@prisma/client'
import { NoRecordFound } from '../configs/Responses.js';
import { exclude, getDateFromDateTime, getDateTimeRangeForCurrentYear, getYearShortCode } from '../utils/helper.js';
import { getTableRecordWithId } from '../utils/helperQueries.js';


const prisma = new PrismaClient()


async function getNextDocId(branchId, isTaxBill) {
    console.log(isTaxBill, "isTaxBill")
    const { startTime, endTime } = getDateTimeRangeForCurrentYear(new Date());
    let lastObject = await prisma.salesBill.findFirst({
        where: {
            branchId: parseInt(branchId),
            isTaxBill: isTaxBill ? JSON.parse(isTaxBill) : undefined,
            AND: [
                {
                    createdAt: {
                        gte: startTime

                    }
                },
                {
                    createdAt: {
                        lte: endTime
                    }
                }
            ],
        },
        orderBy: {
            id: 'desc'
        }
    });
    const branchObj = await getTableRecordWithId(branchId, "branch")
    const code = (isTaxBill && JSON.parse(isTaxBill)) ? "FGST" : "FGS"
    let newDocId = `${branchObj.branchCode}/${getYearShortCode(new Date())}/${code}/1`
    if (lastObject) {

        newDocId = `${branchObj.branchCode}/${getYearShortCode(new Date())}/${code}/${parseInt(lastObject.docId.split("/").at(-1)) + 1}`
    }
    return newDocId
}

function manualFilterSearchData(searchBillDate, data) {
    return data.filter(item =>
        (searchBillDate ? String(getDateFromDateTime(item.createdAt)).includes(searchBillDate) : true)
    )
}

async function get(req) {
    const { companyId, active, branchId, pagination, pageNumber, dataPerPage, searchDocId, searchBillDate, searchSupplierName, isTaxBill } = req.query
    let data = await prisma.salesBill.findMany({
        where: {
            companyId: companyId ? parseInt(companyId) : undefined,
            active: active ? Boolean(active) : undefined,
            docId: Boolean(searchDocId) ?
                {
                    contains: searchDocId
                }
                : undefined,

            supplier: {
                name: Boolean(searchSupplierName) ? { contains: searchSupplierName } : undefined
            }
        },
        include: {
            supplier: {
                select: {
                    name: true
                }
            }
        }
    });
    data = manualFilterSearchData(searchBillDate, data)
    const totalCount = data.length

    if (pagination) {
        data = data.slice(((pageNumber - 1) * parseInt(dataPerPage)), pageNumber * dataPerPage)
    }
    let newDocId = await getNextDocId(branchId, isTaxBill)
    return { statusCode: 0, nextDocId: newDocId, data };
}


async function getOne(id) {
    const childRecord = 0;
    const data = await prisma.salesBill.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            SalesBillItems: {
                select: {
                    id: true,

                    Product: {
                        select: {
                            name: true,
                            hsn: true,
                            description:true
                        }
                    },

                    productId: true,
                    qty: true,
                    price: true,
                    imeiNo: true,
                    simNo: true,
                    vehicleNo: true,
                    tax:true
                }
            }
        }
    })
    if (!data) return NoRecordFound("salesBill");



    return { statusCode: 0, data: { ...data, ...{ childRecord } } };
}

async function getSearch(req) {
    const { searchKey } = req.params
    const { companyId, active } = req.query
    const data = await prisma.salesBill.findMany({
        where: {
            companyId: companyId ? parseInt(companyId) : undefined,
            active: active ? Boolean(active) : undefined,
            OR: [
                {
                    name: {
                        contains: searchKey,
                    },
                },
            ],
        }
    })
    return { statusCode: 0, data: data };
}

async function create(body) {

    const { supplierId, salesBillItems, companyId, active, branchId, empId, leadCategoriesId, isTaxBill, docId} = await body
   
    const data = await prisma.salesBill.create(
        {
            data: {
                docId: docId,
                empId: empId,
                supplierId: parseInt(supplierId),
                companyId: parseInt(companyId), active,
                leadCategoriesId: parseInt(leadCategoriesId),
                isTaxBill: isTaxBill,
                branchId: parseInt(branchId),
                SalesBillItems: {
                    createMany: {
                        data: salesBillItems.map(temp => {
                            let newItem = {}
                            newItem["productId"] = parseInt(temp["productId"]);
                            newItem["qty"] = temp.qty ? parseFloat(temp["qty"]) : 0.00;
                            newItem["price"] = temp?.price ? parseFloat(temp["price"]) : 0.000;
                            newItem["vehicleNo"] = temp["vehicleNo"];
                            newItem["imeiNo"] = temp["imeiNo"];
                            newItem["simNo"] = temp["simNo"];
                            newItem["tax"] = temp["tax"];
                            return newItem
                        }),
                    }
                }

            }
        })

    return { statusCode: 0, data };
}


async function update(id, body) {
    const { supplierId, salesBillItems, active } = await body
    const dataFound = await prisma.salesBill.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!dataFound) return NoRecordFound("salesBill");
    const data = await prisma.salesBill.update({
        where: {
            id: parseInt(id),
        },

        data: {
            supplierId: parseInt(supplierId),
            active,
            SalesBillItems: {
                deleteMany: {},
                createMany: {
                    data: salesBillItems.map(temp => {

                        let newItem = {}
                        newItem["productId"] = parseInt(temp["productId"]);
                        newItem["qty"] = temp.qty ? parseFloat(temp["qty"]) : 0.00;
                        newItem["price"] = temp?.price ? parseFloat(temp["price"]) : 0.000;

                        newItem["vehicleNo"] = temp["vehicleNo"];
                        newItem["imeiNo"] = temp["imeiNo"];
                        newItem["simNo"] = temp["simNo"];


                        return newItem
                    }),
                }
            }

        }
    })
    return { statusCode: 0, data };
};

async function remove(id) {
    const data = await prisma.salesBill.delete({
        where: {
            id: parseInt(id)
        },
    })
    return { statusCode: 0, data };
}

export {
    get,
    getOne,
    getSearch,
    create,
    update,
    remove
}