-- DropForeignKey
ALTER TABLE `salesbillitems` DROP FOREIGN KEY `SalesBillItems_uomId_fkey`;

-- AlterTable
ALTER TABLE `salesbillitems` MODIFY `uomId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `SalesBillItems` ADD CONSTRAINT `SalesBillItems_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
