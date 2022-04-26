-- CreateTable
CREATE TABLE "UserOnUser" (
    "childId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "realtionType" TEXT NOT NULL,

    PRIMARY KEY ("childId", "parentId"),
    CONSTRAINT "UserOnUser_childId_fkey" FOREIGN KEY ("childId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnUser_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
