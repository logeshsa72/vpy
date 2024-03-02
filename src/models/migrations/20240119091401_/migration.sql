/*
  Warnings:

  - You are about to drop the column `productBrandId` on the `poreturnitems` table. All the data in the column will be lost.
  - You are about to drop the column `productCategoryId` on the `poreturnitems` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `poreturnitems` DROP FOREIGN KEY `PoReturnItems_productBrandId_fkey`;

-- DropForeignKey
ALTER TABLE `poreturnitems` DROP FOREIGN KEY `PoReturnItems_productCategoryId_fkey`;

-- AlterTable
ALTER TABLE `poreturnitems` DROP COLUMN `productBrandId`,
    DROP COLUMN `productCategoryId`,
    ADD COLUMN `purchaseBillItemsId` INTEGER NULL,
    ADD COLUMN `stockQty` DOUBLE NULL;

-- AddForeignKey
ALTER TABLE `PoReturnItems` ADD CONSTRAINT `PoReturnItems_purchaseBillItemsId_fkey` FOREIGN KEY (`purchaseBillItemsId`) REFERENCES `PoBillItems`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
