import { PrismaClient } from '@prisma/client'
import { NoRecordFound } from '../configs/Responses.js';

const prisma = new PrismaClient()


async function get(req) {
    const { companyId, active } = req.query
    const data = await prisma.leadCategories.findMany({
        where: {
            companyId: companyId ? parseInt(companyId) : undefined,
            active: active ? Boolean(active) : undefined,
        }
    });
    return { statusCode: 0, data };
}


async function getOne(id) {
    const childRecord = 0;
    const data = await prisma.leadCategories.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!data) return NoRecordFound("leadCategories");
    return { statusCode: 0, data: {...data, ...{childRecord}} };
}

async function getSearch(req) {
    const { searchKey } = req.params
    const { companyId, active } = req.query
    const data = await prisma.leadCategories.findMany({
        where: {
            companyId: companyId ? parseInt(companyId) : undefined,
            active: active ? Boolean(active) : undefined,
            OR: [
                {
                    name: {
                        contains: searchKey,
                    },
                },
                {
                    code: {
                        contains: searchKey,
                    },
                },
            ],
        }
    })
    return { statusCode: 0, data: data };
}

async function create(body) {
    const { name, code, active, companyId } = await body;
    console.log(body, "name");

    const data = await prisma.leadCategories.create({
        data: {
            name, code, active, companyId: parseInt(companyId)
        }
    });

    return { statusCode: 0, data };

}

async function update(id, body) {
    const { name, code, active } = await body
    const dataFound = await prisma.leadCategories.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!dataFound) return NoRecordFound("leadCategories");
    const data = await prisma.leadCategories.update({
        where: {
            id: parseInt(id),
        },
        data:
        {
            name, code, active
        },
    })
    return { statusCode: 0, data };
};

async function remove(id) {
    const data = await prisma.leadCategories.delete({
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
