/*
  Warnings:

  - You are about to drop the column `purchaseBillId` on the `product ProductUomPriceDetails` table. All the data in the column will be lost.
  - You are about to drop the column `uomId` on the `purchasebill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product ProductUomPriceDetails` DROP FOREIGN KEY `Product ProductUomPriceDetails_purchaseBillId_fkey`;

-- DropForeignKey
ALTER TABLE `purchasebill` DROP FOREIGN KEY `PurchaseBill_uomId_fkey`;

-- AlterTable
ALTER TABLE `pobillitems` ADD COLUMN `uomId` INTEGER NULL;

-- AlterTable
ALTER TABLE `product ProductUomPriceDetails` DROP COLUMN `purchaseBillId`,
    ADD COLUMN `poBillItemsId` INTEGER NULL;

-- AlterTable
ALTER TABLE `purchasebill` DROP COLUMN `uomId`;

-- AddForeignKey
ALTER TABLE `Product ProductUomPriceDetails` ADD CONSTRAINT `Product ProductUomPriceDetails_poBillItemsId_fkey` FOREIGN KEY (`poBillItemsId`) REFERENCES `PoBillItems`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PoBillItems` ADD CONSTRAINT `PoBillItems_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
