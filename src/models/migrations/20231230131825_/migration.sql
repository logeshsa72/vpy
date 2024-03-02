-- CreateTable
CREATE TABLE `ProductBrand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `code` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `companyId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductBrand` ADD CONSTRAINT `ProductBrand_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
