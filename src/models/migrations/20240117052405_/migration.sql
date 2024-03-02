/*
  Warnings:

  - You are about to alter the column `qty` on the `stock` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `stock` MODIFY `inOrOut` ENUM('In', 'Out') NULL,
    MODIFY `qty` DOUBLE NULL;
