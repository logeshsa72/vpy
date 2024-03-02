-- DropForeignKey
ALTER TABLE `combodetail` DROP FOREIGN KEY `ComboDetail_compoId_fkey`;

-- DropForeignKey
ALTER TABLE `combodetail` DROP FOREIGN KEY `ComboDetail_productId_fkey`;

-- AddForeignKey
ALTER TABLE `ComboDetail` ADD CONSTRAINT `ComboDetail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboDetail` ADD CONSTRAINT `ComboDetail_compoId_fkey` FOREIGN KEY (`compoId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
