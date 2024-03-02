-- AlterTable
ALTER TABLE `productuompricedetails` ADD COLUMN `poReturnItemsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ProductUomPriceDetails` ADD CONSTRAINT `ProductUomPriceDetails_poReturnItemsId_fkey` FOREIGN KEY (`poReturnItemsId`) REFERENCES `PoReturnItems`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
