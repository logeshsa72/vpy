-- CreateTable
CREATE TABLE `Stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inOrOut` ENUM('In', 'Out') NOT NULL,
    `productId` INTEGER NULL,
    `qty` INTEGER NULL,
    `poBillItemsId` INTEGER NULL,

    UNIQUE INDEX `Stock_poBillItemsId_key`(`poBillItemsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_poBillItemsId_fkey` FOREIGN KEY (`poBillItemsId`) REFERENCES `PoBillItems`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
