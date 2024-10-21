/*
  Warnings:

  - The values [EN_COURS,FAIT] on the enum `EnumTaskStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EnumTaskStatus_new" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED');
ALTER TABLE "Task" ALTER COLUMN "status" TYPE "EnumTaskStatus_new" USING ("status"::text::"EnumTaskStatus_new");
ALTER TYPE "EnumTaskStatus" RENAME TO "EnumTaskStatus_old";
ALTER TYPE "EnumTaskStatus_new" RENAME TO "EnumTaskStatus";
DROP TYPE "EnumTaskStatus_old";
COMMIT;
