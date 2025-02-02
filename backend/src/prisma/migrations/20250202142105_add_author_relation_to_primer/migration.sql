/*
  Warnings:

  - Added the required column `authorId` to the `Primer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Primer" ADD COLUMN     "authorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Primer" ADD CONSTRAINT "Primer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
