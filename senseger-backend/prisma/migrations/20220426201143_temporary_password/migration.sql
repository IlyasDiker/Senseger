-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "discordauth" TEXT,
    "avatar" TEXT,
    "username" TEXT,
    "fullname" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "country" TEXT
);
INSERT INTO "new_User" ("avatar", "country", "discordauth", "email", "fullname", "id", "isAdmin", "password", "username") SELECT "avatar", "country", "discordauth", "email", "fullname", "id", "isAdmin", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
