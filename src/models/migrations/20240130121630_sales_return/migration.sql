-- DropIndex
DROP INDEX `ProductUomPriceDetails_poReturnItemsId_fkey` ON `productuompricedetails`;

-- AlterTable
ALTER TABLE `salesreturn` ADD COLUMN `uomId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `SalesReturn` ADD CONSTRAINT `SalesReturn_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
