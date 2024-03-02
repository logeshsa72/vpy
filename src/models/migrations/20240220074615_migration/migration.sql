/*
  Warnings:

  - You are about to drop the column `comboId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `combo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `combodetail` DROP FOREIGN KEY `ComboDetail_ComboId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_comboId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `comboId`;

-- DropTable
DROP TABLE `combo`;
