/*
  Warnings:

  - Added the required column `productId` to the `Product ProductUomPriceDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product ProductUomPriceDetails` ADD COLUMN `productId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product ProductUomPriceDetails` ADD CONSTRAINT `Product ProductUomPriceDetails_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
