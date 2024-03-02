/*
  Warnings:

  - You are about to drop the column `empId` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `empId`;

-- AlterTable
ALTER TABLE `employeecategory` ADD COLUMN `empId` INTEGER NULL;
