/*
  Warnings:

  - You are about to drop the `product productuompricedetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product productuompricedetails` DROP FOREIGN KEY `Product ProductUomPriceDetails_productId_fkey`;

-- DropForeignKey
ALTER TABLE `product productuompricedetails` DROP FOREIGN KEY `Product ProductUomPriceDetails_uomId_fkey`;

-- AlterTable
ALTER TABLE `poreturnitems` ADD COLUMN `uomId` INTEGER NULL;

-- DropTable
DROP TABLE `product productuompricedetails`;

-- CreateTable
CREATE TABLE `ProductUomPriceDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `price` DOUBLE NOT NULL DEFAULT 0,
    `uomId` INTEGER NULL,
    `productId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductUomPriceDetails` ADD CONSTRAINT `ProductUomPriceDetails_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductUomPriceDetails` ADD CONSTRAINT `ProductUomPriceDetails_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PoReturnItems` ADD CONSTRAINT `PoReturnItems_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
