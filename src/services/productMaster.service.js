import { PrismaClient } from '@prisma/client'
import { NoRecordFound } from '../configs/Responses.js';

const prisma = new PrismaClient()


async function get(req) {
    const { companyId, active, productBrandId, productCategoryId } = req.query

    const data = await prisma.product.findMany({
        where: {
            companyId: companyId ? parseInt(companyId) : undefined,
            active: active ? Boolean(active) : undefined,
            productCategoryId: productCategoryId ? parseInt(productCategoryId) : undefined,
            productBrandId: productBrandId ? parseInt(productBrandId) : undefined
        },
        include: {
            ProductUomPriceDetails: {
                include: {
                    Uom: {
                        select: {
                            name: true,
                        }
                    },
                    Product: {
                        select: {
                            hsn: true,
                            description: true
                        }

                    }

                }
            }
        }
    });
    return { statusCode: 0, data };
}




async function getOne(id) {
    const childRecord = await prisma.poBillItems.count({ where: { productBrandId: parseInt(id) } });
    const data = await prisma.product.findUnique({
        where: {
            id: parseInt(id)
        },

    })

    if (!data) return NoRecordFound("Product");
    return { statusCode: 0, data: { ...data, ...{ childRecord } } };
}



async function getSearch(req) {
    const { searchKey } = req.params
    const { companyId, active } = req.query
    const data = await prisma.product.findMany({
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
    const { name, code, companyId, active, ProductUomPriceDetails, type, hsn, description } = await body;
    console.log(hsn, "hsn")
    const uomData = ProductUomPriceDetails.map(item => {
        return {
            uomId: parseInt(item.uomId),
            price: parseFloat(item.price),
        };
    });

    const data = await prisma.product.create({
        data: {
            name, hsn,
            description,
            companyId: parseInt(companyId),
            active,
            ProductUomPriceDetails: { createMany: { data: uomData } },
            ComboDetailCompo: type
                ? {
                    createMany: {
                        data: type.map((t) => ({ comboId: parseInt(t.id), productId: 1 })),
                    },
                }
                : undefined,
        }
    });

    return { statusCode: 0, data };
}




async function update(id, body) {
    const { name, code, active, ProductUomPriceDetails, description } = await body;
    const uomData = ProductUomPriceDetails.map(item => {
        return {
            uomId: parseInt(item.uomId),
            price: parseFloat(item.price),
        };
    });
    const dataFound = await prisma.product.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    if (!dataFound) return NoRecordFound("Product");
    const data = await prisma.product.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name,
            active,
            description,  // Include the description field in the update
            ProductUomPriceDetails: {
                deleteMany: {},
                createMany: { data: uomData },
            },
        },
    });
    return { statusCode: 0, data };
};


async function remove(id) {
    console.log(id, "id")
    const data = await prisma.product.delete({
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
