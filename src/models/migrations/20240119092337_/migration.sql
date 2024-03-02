/*
  Warnings:

  - You are about to drop the column `price` on the `poreturnitems` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `poreturnitems` DROP COLUMN `price`,
    ADD COLUMN `poQty` DOUBLE NULL;
