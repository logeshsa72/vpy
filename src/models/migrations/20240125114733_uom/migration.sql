/*
  Warnings:

  - You are about to drop the column `poBillItemsId` on the `product ProductUomPriceDetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product ProductUomPriceDetails` DROP FOREIGN KEY `Product ProductUomPriceDetails_poBillItemsId_fkey`;

-- AlterTable
ALTER TABLE `product ProductUomPriceDetails` DROP COLUMN `poBillItemsId`;
