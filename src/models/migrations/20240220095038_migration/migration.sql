/*
  Warnings:

  - You are about to drop the column `ComboId` on the `combodetail` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `combodetail` table. All the data in the column will be lost.
  - Added the required column `comboId` to the `ComboDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `compoId` to the `ComboDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ComboDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `combodetail` DROP FOREIGN KEY `ComboDetail_ProductId_fkey`;

-- AlterTable
ALTER TABLE `combodetail` DROP COLUMN `ComboId`,
    DROP COLUMN `ProductId`,
    ADD COLUMN `comboId` INTEGER NOT NULL,
    ADD COLUMN `compoId` INTEGER NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ComboDetail` ADD CONSTRAINT `ComboDetail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComboDetail` ADD CONSTRAINT `ComboDetail_compoId_fkey` FOREIGN KEY (`compoId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
