/*
  Warnings:

  - You are about to alter the column `hsn` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `MediumInt`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `hsn` MEDIUMINT NULL;
