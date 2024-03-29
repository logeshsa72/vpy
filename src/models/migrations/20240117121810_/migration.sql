/*
  Warnings:

  - A unique constraint covering the columns `[salesBillItemsId]` on the table `Stock` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `stock` ADD COLUMN `salesBillItemsId` INTEGER NULL;

-- CreateTable
CREATE TABLE `SalesBill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplierId` INTEGER NULL,
    `branchId` INTEGER NULL,
    `address` VARCHAR(191) NULL,
    `place` VARCHAR(191) NULL,
    `docId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dueDate` DATE NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `companyId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SalesBillItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `salesBillId` INTEGER NULL,
    `productBrandId` INTEGER NULL,
    `productCategoryId` INTEGER NULL,
    `productId` INTEGER NULL,
    `qty` DOUBLE NULL,
    `price` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Stock_salesBillItemsId_key` ON `Stock`(`salesBillItemsId`);

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_salesBillItemsId_fkey` FOREIGN KEY (`salesBillItemsId`) REFERENCES `SalesBillItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesBill` ADD CONSTRAINT `SalesBill_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `Party`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesBill` ADD CONSTRAINT `SalesBill_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesBillItems` ADD CONSTRAINT `SalesBillItems_salesBillId_fkey` FOREIGN KEY (`salesBillId`) REFERENCES `SalesBill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesBillItems` ADD CONSTRAINT `SalesBillItems_productBrandId_fkey` FOREIGN KEY (`productBrandId`) REFERENCES `ProductBrand`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesBillItems` ADD CONSTRAINT `SalesBillItems_productCategoryId_fkey` FOREIGN KEY (`productCategoryId`) REFERENCES `ProductCategory`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SalesBillItems` ADD CONSTRAINT `SalesBillItems_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
