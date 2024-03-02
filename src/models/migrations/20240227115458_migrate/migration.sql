/*
  Warnings:

  - You are about to drop the column `Amount` on the `salesbill` table. All the data in the column will be lost.
  - You are about to drop the column `tax` on the `salesbill` table. All the data in the column will be lost.
  - You are about to drop the column `taxRate` on the `salesbill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `salesbill` DROP COLUMN `Amount`,
    DROP COLUMN `tax`,
    DROP COLUMN `taxRate`;

-- AlterTable
ALTER TABLE `salesbillitems` ADD COLUMN `tax` INTEGER NULL;
