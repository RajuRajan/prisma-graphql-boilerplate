# Migration `20200604203922-init`

This migration has been generated at 6/4/2020, 8:39:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Profile" (
"bio" text   ,"id" SERIAL,"userId" integer  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Profile.userId" ON "public"."Profile"("userId")

ALTER TABLE "public"."Profile" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200604184232-init..20200604203922-init
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,5 +13,13 @@
 model User {
   id      Int      @default(autoincrement()) @id
   email   String?   @unique
   password    String?
+  profile Profile?
 }
+
+model Profile {
+  id     Int     @default(autoincrement()) @id
+  bio    String?
+  user   User    @relation(fields: [userId], references: [id])
+  userId Int     @unique
+}
```


