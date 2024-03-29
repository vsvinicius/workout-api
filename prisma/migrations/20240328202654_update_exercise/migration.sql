/*
  Warnings:

  - Added the required column `reps` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sets` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" ADD COLUMN     "reps" TEXT NOT NULL,
ADD COLUMN     "sets" TEXT NOT NULL;
