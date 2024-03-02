-- AlterTable
ALTER TABLE `party` ADD COLUMN `isCustomer` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `isSupplier` BOOLEAN NULL DEFAULT false;
