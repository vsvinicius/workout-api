/*
  Warnings:

  - Made the column `muscle_group` on table `exercises` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "exercises" ALTER COLUMN "muscle_group" SET NOT NULL;
