-- CreateEnum
CREATE TYPE "EnumTaskStatus" AS ENUM ('EN_COURS', 'FAIT');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "EnumTaskStatus" NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
