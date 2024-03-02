-- AlterTable
ALTER TABLE `stock` ADD COLUMN `uomId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
