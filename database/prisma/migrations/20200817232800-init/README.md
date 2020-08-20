# Migration `20200817232800-init`

This migration has been generated at 8/17/2020, 5:28:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Contact" (
"id" text  NOT NULL ,
"phoneNumberId" text  NOT NULL ,
"emailId" text  NOT NULL ,
"userId" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."PhoneNumber" (
"id" text  NOT NULL ,
"number" text  NOT NULL ,
"verifiedAt" timestamp(3)   ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Email" (
"id" text  NOT NULL ,
"address" text  NOT NULL ,
"verifiedAt" timestamp(3)   ,
PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Contact_phoneNumberId" ON "public"."Contact"("phoneNumberId")

CREATE UNIQUE INDEX "Contact_emailId" ON "public"."Contact"("emailId")

CREATE UNIQUE INDEX "Contact_userId" ON "public"."Contact"("userId")

ALTER TABLE "public"."Contact" ADD FOREIGN KEY ("phoneNumberId")REFERENCES "public"."PhoneNumber"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Contact" ADD FOREIGN KEY ("emailId")REFERENCES "public"."Email"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Contact" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200817232800-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,40 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-ts"
+}
+
+model User {
+  id      String  @id @default(cuid())
+  contact Contact
+}
+
+model Contact {
+  id            String      @id @default(cuid())
+  phoneNumber   PhoneNumber @relation(fields: [phoneNumberId], references: [id])
+  email         Email       @relation(fields: [emailId], references: [id])
+  user          User        @relation(fields: [userId], references: [id])
+  phoneNumberId String
+  emailId       String
+  userId        String
+}
+
+model PhoneNumber {
+  id         String    @id @default(cuid())
+  number     String
+  verifiedAt DateTime?
+  contact    Contact
+}
+
+model Email {
+  id         String    @id @default(cuid())
+  address    String
+  verifiedAt DateTime?
+  contact    Contact
+}
```


