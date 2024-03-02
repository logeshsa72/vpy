/*
  Warnings:

  - You are about to drop the column `productId` on the `combo` table. All the data in the column will be lost.
  - Added the required column `name` to the `Combo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `combo` DROP COLUMN `productId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ComboDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ComboId` INTEGER NOT NULL,
    `ProductId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ComboDetail` ADD CONSTRAINT `ComboDetail_ComboId_fkey` FOREIGN KEY (`ComboId`) REFERENCES `Combo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboDetail` ADD CONSTRAINT `ComboDetail_ProductId_fkey` FOREIGN KEY (`ProductId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
