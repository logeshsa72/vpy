-- AlterTable
ALTER TABLE `productuompricedetails` ADD COLUMN `poBillItemsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ProductUomPriceDetails` ADD CONSTRAINT `ProductUomPriceDetails_poBillItemsId_fkey` FOREIGN KEY (`poBillItemsId`) REFERENCES `PoBillItems`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
