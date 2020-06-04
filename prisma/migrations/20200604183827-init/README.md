# Migration `20200604183827-init`

This migration has been generated at 6/4/2020, 6:38:27 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" DROP COLUMN "name",
ADD COLUMN "password" text   ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200604182923-init..20200604183827-init
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
@@ -12,6 +12,6 @@
 model User {
   id      Int      @default(autoincrement()) @id
   email   String   @unique
-  name    String?
+  password    String?
 }
```


