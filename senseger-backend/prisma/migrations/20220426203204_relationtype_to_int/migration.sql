/*
  Warnings:

  - You are about to alter the column `realtionType` on the `UserOnUser` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserOnUser" (
    "childId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "realtionType" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("childId", "parentId"),
    CONSTRAINT "UserOnUser_childId_fkey" FOREIGN KEY ("childId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserOnUser_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserOnUser" ("childId", "parentId", "realtionType") SELECT "childId", "parentId", "realtionType" FROM "UserOnUser";
DROP TABLE "UserOnUser";
ALTER TABLE "new_UserOnUser" RENAME TO "UserOnUser";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
