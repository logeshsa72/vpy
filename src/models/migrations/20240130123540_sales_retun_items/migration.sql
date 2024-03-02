-- AlterTable
ALTER TABLE `productuompricedetails` ADD COLUMN `salesReturnItemsId` INTEGER NULL;

-- AlterTable
ALTER TABLE `salesreturnitems` ADD COLUMN `uomId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ProductUomPriceDetails` ADD CONSTRAINT `ProductUomPriceDetails_salesReturnItemsId_fkey` FOREIGN KEY (`salesReturnItemsId`) REFERENCES `SalesReturnItems`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesReturnItems` ADD CONSTRAINT `SalesReturnItems_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
