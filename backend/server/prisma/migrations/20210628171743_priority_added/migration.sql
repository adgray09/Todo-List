-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "priority" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
