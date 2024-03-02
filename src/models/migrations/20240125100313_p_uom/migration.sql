-- AlterTable
ALTER TABLE `product ProductUomPriceDetails` ADD COLUMN `purchaseBillId` INTEGER NULL;

-- AlterTable
ALTER TABLE `purchasebill` ADD COLUMN `uomId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product ProductUomPriceDetails` ADD CONSTRAINT `Product ProductUomPriceDetails_purchaseBillId_fkey` FOREIGN KEY (`purchaseBillId`) REFERENCES `PurchaseBill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseBill` ADD CONSTRAINT `PurchaseBill_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
