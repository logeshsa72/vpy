-- CreateTable
CREATE TABLE `Product ProductUomPriceDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uomId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product ProductUomPriceDetails` ADD CONSTRAINT `Product ProductUomPriceDetails_uomId_fkey` FOREIGN KEY (`uomId`) REFERENCES `Uom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
