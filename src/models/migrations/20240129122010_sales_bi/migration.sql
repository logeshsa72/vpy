/*
  Warnings:

  - Added the required column `uomId` to the `SalesBillItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `salesbillitems` ADD COLUMN `uomId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `SalesBillItems` ADD CONSTRAINT `SalesBillItems_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
