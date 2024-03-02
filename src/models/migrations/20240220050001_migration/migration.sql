/*
  Warnings:

  - You are about to drop the column `combo` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `combo`,
    ADD COLUMN `comboId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Combo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_comboId_fkey` FOREIGN KEY (`comboId`) REFERENCES `Combo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
