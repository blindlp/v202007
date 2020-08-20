# Migration `20200818222652-init`

This migration has been generated at 8/18/2020, 4:26:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."Contact_emailId"

ALTER TABLE "public"."Contact" DROP CONSTRAINT "Contact_emailId_fkey"

ALTER TABLE "public"."Contact" DROP COLUMN "emailId";

DROP TABLE "public"."Email";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200817232800-init..20200818222652-init
--- datamodel.dml
+++ datamodel.dml
@@ -2,13 +2,13 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
-  provider = "prisma-client-ts"
+  provider = "prisma-client-js"
 }
 model User {
   id      String  @id @default(cuid())
@@ -17,12 +17,10 @@
 model Contact {
   id            String      @id @default(cuid())
   phoneNumber   PhoneNumber @relation(fields: [phoneNumberId], references: [id])
-  email         Email       @relation(fields: [emailId], references: [id])
   user          User        @relation(fields: [userId], references: [id])
   phoneNumberId String
-  emailId       String
   userId        String
 }
 model PhoneNumber {
@@ -30,11 +28,4 @@
   number     String
   verifiedAt DateTime?
   contact    Contact
 }
-
-model Email {
-  id         String    @id @default(cuid())
-  address    String
-  verifiedAt DateTime?
-  contact    Contact
-}
```


