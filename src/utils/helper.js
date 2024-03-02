import { PrismaClient } from '@prisma/client'
import moment from 'moment'

const prisma = new PrismaClient()

export function getYearShortCode(year) {
  return `${new Date(year).getFullYear().toString().slice(2)}`
}
export const getDateFromDateTime = (dateTime) => moment.utc(dateTime).format("DD-MM-YYYY")


export function getItemFullNameFromShortCode(shortCode) {
  let fullForm = "";
  switch (shortCode) {
    case "GY":
      fullForm = "GreyYarn"
      break;
    case "GF":
      fullForm = "GreyFabric"
      break;
    case "DY":
      fullForm = "DyedYarn"
      break;
    case "DF":
      fullForm = "DyedFabric"
      break;
    default:
      break;
  }
  return fullForm
}

export async function getStockProperty(itemType, item, property, storeId, branchId) {
  let stockItems = await prisma.stock.findMany({
    where: {
      itemType: itemType,
      // branchId: parseInt(branchId),
      yarnId: item?.yarnId ? parseInt(item.yarnId) : undefined,
      fabricId: item?.fabricId ? parseInt(item.fabricId) : undefined,
      colorId: item?.colorId ? parseInt(item.colorId) : undefined,
      uomId: item?.uomId ? parseInt(item.uomId) : undefined,
      designId: item?.designId ? parseInt(item.designId) : undefined,
      gaugeId: item?.gaugeId ? parseInt(item.gaugeId) : undefined,
      loopLengthId: item?.loopLengthId ? parseInt(item.loopLengthId) : undefined,
      gsmId: item?.gsmId ? parseInt(item.gsmId) : undefined,
      sizeId: item?.sizeId ? parseInt(item.sizeId) : undefined,
      kDiaId: item?.kDiaId ? parseInt(item.kDiaId) : undefined,
      fDiaId: item?.fDiaId ? parseInt(item.fDiaId) : undefined,
      noOfBags: item?.noOfBags ? parseInt(item.noOfBags) : undefined,
      noOfRolls: item?.noOfRolls ? parseInt(item.noOfRolls) : undefined,
      qty: item?.qty ? parseFloat(item.qty) : undefined,
      price: item?.price ? parseFloat(item.price) : undefined,
      storeId: parseInt(storeId),
      lotNo: item?.lotNo ? item.lotNo : undefined,
      processId: item?.processId ? parseInt(item.processId) : undefined,
    }
  })
  if (!stockItems) return 0;
  let totalQty = stockItems.reduce((accumulator, current) => {
    return (accumulator + parseFloat(current.qty))
  }, 0)
  if (property === "qty") {
    return totalQty
  }
  let totalGross = stockItems.reduce((accumulator, current) => {
    let currentGross = parseFloat(current.price) * parseFloat(current.qty);
    return (accumulator + currentGross)
  }, 0)
  if ((totalGross === 0) || (totalQty === 0)) return 0
  let weightedAverage = totalGross / totalQty
  return weightedAverage
}


export async function getAlreadyInwardedQty(po, poItemId) {
  let supplierInwards = await prisma.pInwardOrReturn.findMany({
    where: {
      supplierId: parseInt(po.supplierId),
      inwardOrReturn: "PurchaseInward"
    }
  })
  let poItems = []
  supplierInwards.forEach(poInwardOrReturn =>
    poInwardOrReturn.poInwardReturnItems.forEach(poItem => {
      if (poItem.poItemId === poItemId) {
        poItems.push(poItem)
      }
    })
  )
  let totalInwardQty = poItems.reduce((total, currentPoItem) => {
    return total + parseFloat(currentPoItem.inwardQty)
  }, 0)
  return totalInwardQty
}

export async function getAlreadyReturnedQty(po, poItemId) {
  let supplierReturns = await prisma.pInwardOrReturn.findMany({
    where: {
      supplierId: parseInt(po.supplierId),
      inwardOrReturn: "PurchaseReturn"
    }
  })
  let poItems = []
  supplierReturns.forEach(poInwardOrReturn =>
    poInwardOrReturn.poInwardReturnItems.forEach(poItem => {
      if (poItem.poItemId === poItemId) {
        poItems.push(poItem)
      }
    })
  )
  let totalReturnQty = poItems.reduce((total, currentPoItem) => {
    return total + parseFloat(substract(0, currentPoItem.returnQty))
  }, 0)
  return totalReturnQty
}

export async function getAlreadyCanceledQty(po, poItemId) {
  let supplierCancels = await prisma.pInwardOrReturn.findMany({
    where: {
      supplierId: parseInt(po.supplierId),
      inwardOrReturn: "PurchaseCancel"
    }
  })
  let poItems = []
  supplierCancels.forEach(poInwardOrReturn =>
    poInwardOrReturn.poInwardReturnItems.forEach(poItem => {
      if (poItem.poItemId === poItemId) {
        poItems.push(poItem)
      }
    })
  )
  let totalCancelQty = poItems.reduce((total, currentPoItem) => {
    return total + parseFloat(currentPoItem.cancelQty);
  }, 0)
  return totalCancelQty
}

export function generateSubscriptionCode(length = 6) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function findDateInRange(fromDate, toDate, checkDate) {
  if ((fromDate <= checkDate) && (checkDate <= toDate)) {
    return true
  }
  return false;
}

export function exclude(user, keys) {
  for (let key of keys) {
    delete user[key]
  }
  return user
}

export async function base64Tobuffer(base64) {
  const response = await fetch(base64);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer
}

export function getDateTimeRange(date) {
  let startTime = new Date(date);
  startTime.setHours(0, 0, 0, 0);
  let endTime = new Date(date);
  endTime.setHours(23, 59, 59, 99);
  return { startTime, endTime };
}

export function getDateTimeRangeForCurrentYear(date) {
  let startTime = new Date(date);
  startTime.setDate(1)
  startTime.setMonth(0)
  startTime.setHours(0, 0, 0, 0);
  let endTime = new Date(date);
  endTime.setDate(31)
  endTime.setMonth(11)
  endTime.setHours(23, 59, 59, 99);
  return { startTime, endTime };
}




export function generateOrderProductID() {
  // Generate a random UUID
  const uuid = generateUUID();

  // Get the current timestamp
  const timestamp = Date.now().toString();

  // Concatenate the timestamp and unique ID
  const orderProductID = `${timestamp}_${uuid}`;

  return orderProductID;
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getPriceAddStockQtyWithWeightedAverage(stock, poItem) {
  let stockGross = (parseFloat(stock.price) * parseFloat(stock.qty));
  let currentGross = (parseFloat(poItem.price) * parseFloat(poItem.inwardQty))
  let totalItems = parseFloat(stock.qty) + parseFloat(poItem.inwardQty)
  return (stockGross + currentGross) / totalItems
}

export function getPriceReturnStockQtyWithWeightedAverage(stock, poItem) {
  let stockPrice = parseFloat(stock.price)
  let stockQty = parseFloat(stock.qty)
  let stockGross = stockPrice * stockQty
  let oldInwardedQty = parseFloat(poItem.alreadyInwardedQty)
  let currentItemGross = (parseFloat(poItem.price) * oldInwardedQty)
  let oldStockGross = stockGross - currentItemGross
  let oldStockQty = stockQty - oldInwardedQty
  let oldStockPrice = oldStockGross / oldStockQty
  let currentInwardQty = oldInwardedQty - parseFloat(poItem.returnQty);
  return getPriceAddStockQtyWithWeightedAverage({ price: oldStockPrice, qty: oldStockQty }, { price: parseFloat(poItem.price), inwardQty: currentInwardQty })
}

export function substract(num1, num2) {
  let n1 = parseFloat(num1) * 1000;
  let n2 = parseFloat(num2) * 1000;
  let result = (n1 - n2) / 1000
  return result;
}

const getPoItem = async (tx, item, inwardOrReturn) => {
  let poItem = {}
  if (inwardOrReturn.includes("Direct")) {
    poItem = item
  } else {
    let po = await tx.po.findUnique({
      where: {
        id: parseInt(item.poNo)
      }
    })
    poItem = po.poItems.find(it => it.poItemId === item.poItemId)
    poItem["inwardQty"] = item.inwardQty
    poItem["returnQty"] = item.returnQty
  }
  return poItem
}

function getStockItemObject(transType, item) {
  let newItem = {};
  if ((transType === "GreyYarn") || (transType === "DyedYarn")) {
    newItem["yarnId"] = parseInt(item["yarnId"]);
    newItem["noOfBags"] = parseInt(item["noOfBags"])
  } else if ((transType === "GreyFabric") || (transType === "DyedFabric")) {
    newItem["fabricId"] = parseInt(item["fabricId"]);
    newItem["designId"] = parseInt(item["designId"]);
    newItem["gaugeId"] = parseInt(item["gaugeId"]);
    newItem["loopLengthId"] = parseInt(item["loopLengthId"]);
    newItem["gsmId"] = parseInt(item["gsmId"]);
    newItem["kDiaId"] = parseInt(item["kDiaId"]);
    newItem["fDiaId"] = parseInt(item["fDiaId"]);
  } else if (transType === "Accessory") {
    newItem["accessoryId"] = parseInt(item["accessoryId"])
    newItem["sizeId"] = parseInt(item["sizeId"])
  }
  newItem["uomId"] = parseInt(item["uomId"])
  newItem["colorId"] = parseInt(item["colorId"])
  newItem["qty"] = parseFloat(item["qty"])
  newItem["price"] = parseFloat(item["price"])
  newItem["discountType"] = item["discountType"]
  newItem["discountValue"] = parseFloat(item["discountValue"])
  newItem["taxPercent"] = parseFloat(item["taxPercent"])
  return newItem
}


export const stockCreate = async (tx, poType, inwardOrReturn, item, storeId, branchId) => {
  let poItem = await getPoItem(tx, item, inwardOrReturn)
  const stockData = await tx.stock.create({ data: itemDetails })
  item["stockId"] = stockData.id;
  return item
}

export const createManyStockWithId = async (tx, poType, inwardOrReturn, items, storeId, branchId) => {
  let promises = items.map(async (item) => await stockCreate(tx, poType, inwardOrReturn, item, storeId, branchId))
  return Promise.all(promises);
}



export const stockUpdate = async (tx, poType, inwardOrReturn, item) => {
  let poItem = await getPoItem(tx, item, inwardOrReturn)
  const itemDetails = {
    itemType: poType, inOrOut: inwardOrReturn,
    qty: parseFloat(inwardOrReturn.includes("Inward") ? item.inwardQty : (substract(0, item.returnQty))),
    price: parseFloat(poItem.price),
    itemDetails:
      poType.includes("Yarn")
        ?
        {
          yarnId: parseInt(poItem.yarnId),
          colorId: parseInt(poItem.colorId),
          uomId: parseInt(poItem.uomId),
        }
        :
        (
          poType.includes("Fabric")
            ?
            {
              fabricId: parseInt(poItem.fabricId),
              colorId: parseInt(poItem.colorId),
              uomId: parseInt(poItem.uomId),
              fDiaId: parseInt(poItem.fDiaId),
              kDiaId: parseInt(poItem.kDiaId),
              gaugeId: parseInt(poItem.gaugeId),
              designId: parseInt(poItem.designId),
              gsmId: parseInt(poItem.gsmId),
              loopLengthId: parseInt(poItem.loopLengthId)
            }
            :
            {
              accessoryId: parseInt(poItem.accessoryId),
              colorId: parseInt(poItem.colorId),
              uomId: parseInt(poItem.uomId),
              sizeId: parseInt(poItem.sizeId)
            }
        )
  }
  let stockData = {}
  if (item.stockId) {
    stockData = await tx.stock.update({
      where: {
        id: parseInt(item.stockId)
      },
      data: itemDetails
    })
  } else {
    stockData = await tx.stock.create({ data: itemDetails })
  }
  item["stockId"] = stockData.id;
  return item
}

export const updateManyStockWithId = async (tx, poType, inwardOrReturn, items) => {
  let promises = items.map(async (item) => await stockUpdate(tx, poType, inwardOrReturn, item))
  return Promise.all(promises);
}

export const balanceQtyCalculation = (poQty, cancelQty, inwardQty, returnQty) => {
  return substract(substract(poQty ? parseFloat(poQty) : 0, cancelQty ? parseFloat(cancelQty) : 0), substract(inwardQty ? parseFloat(inwardQty) : 0, returnQty ? parseFloat(returnQty) : 0))
}

export const inwardQtyCalculation = (poQty, cancelQty, inwardQty, returnQty) => {
  return substract(substract(poQty ? parseFloat(poQty) : 0, cancelQty ? parseFloat(cancelQty) : 0), substract(inwardQty ? parseFloat(inwardQty) : 0, returnQty ? parseFloat(returnQty) : 0))
}

export const billItemsFiltration = (inwardQty, returnQty) => {
  return substract(inwardQty, returnQty) > 0
}

