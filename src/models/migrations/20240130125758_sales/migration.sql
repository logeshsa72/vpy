/*
  Warnings:

  - You are about to drop the column `salesReturnItemsId` on the `productuompricedetails` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `productuompricedetails` DROP FOREIGN KEY `ProductUomPriceDetails_salesReturnItemsId_fkey`;

-- AlterTable
ALTER TABLE `productuompricedetails` DROP COLUMN `salesReturnItemsId`;
