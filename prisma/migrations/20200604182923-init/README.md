# Migration `20200604182923-init`

This migration has been generated at 6/4/2020, 6:29:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Post" DROP CONSTRAINT IF EXiSTS "Post_authorId_fkey";

ALTER TABLE "public"."Profile" DROP CONSTRAINT IF EXiSTS "Profile_userId_fkey";

DROP TABLE "public"."Post";

DROP TABLE "public"."Profile";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200604121244-init..20200604182923-init
--- datamodel.dml
+++ datamodel.dml
@@ -2,33 +2,16 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
 }
-model Post {
-  id        Int      @default(autoincrement()) @id
-  createdAt DateTime @default(now())
-  title     String
-  content   String?
-  published Boolean  @default(false)
-  author    User     @relation(fields: [authorId], references: [id])
-  authorId  Int
-}
-model Profile {
-  id     Int     @default(autoincrement()) @id
-  bio    String?
-  user   User    @relation(fields: [userId], references: [id])
-  userId Int     @unique
-}
 model User {
   id      Int      @default(autoincrement()) @id
   email   String   @unique
   name    String?
-  posts   Post[]
-  profile Profile?
-}
+}
```


