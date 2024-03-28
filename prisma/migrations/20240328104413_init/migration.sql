/*
  Warnings:

  - The values [nonperishable] on the enum `ItemType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TABLE "Item" ALTER COLUMN "type" DROP DEFAULT;
ALTER TYPE "ItemType" ADD VALUE 'nonPerishable';
ALTER TYPE "ItemType"DROP VALUE 'nonperishable';

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "type" SET DEFAULT 'nonPerishable';
