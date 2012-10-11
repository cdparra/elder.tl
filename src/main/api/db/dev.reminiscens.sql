-- Creator:       MySQL Workbench 5.2.43/ExportSQLite plugin 2009.12.02
-- Author:        Cristhian Parra
-- Caption:       New Model
-- Project:       Name of the project
-- Changed:       2012-09-30 13:10
-- Created:       2012-09-25 17:03
PRAGMA foreign_keys = OFF;

-- Schema: reminiscens
BEGIN;
CREATE TABLE "Event_Type"(
  "event_type_id" INTEGER PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) DEFAULT NULL,
  "description" TEXT DEFAULT NULL,
  "icon_url" TEXT DEFAULT NULL
);
CREATE TABLE "Event_Type_Attribute"(
  "event_type_id" INTEGER NOT NULL,
  "event_type_attr_id" INTEGER NOT NULL,
  "attr_name" TEXT DEFAULT NULL,
  "mandatory" CHAR(1) DEFAULT NULL,
  PRIMARY KEY("event_type_attr_id","event_type_id"),
  CONSTRAINT "rel_event_type_attributes"
    FOREIGN KEY("event_type_id")
    REFERENCES "Event_Type"("event_type_id")
);
CREATE INDEX "Event_Type_Attribute.rel_event_type_attributes" ON "Event_Type_Attribute"("event_type_id");
CREATE TABLE "Fuzzy_Date"(
  "fuzzy_date_id" INTEGER PRIMARY KEY NOT NULL,
  "textual_date" TEXT DEFAULT NULL,
  "exact_date" DATE DEFAULT NULL,
  "decade" INTEGER DEFAULT NULL,
  "year" INTEGER DEFAULT NULL,
  "season" VARCHAR(45),
  "month" INTEGER DEFAULT NULL,
  "day" INTEGER DEFAULT NULL,
  "day_name" VARCHAR(45),-- Monday, Tuesday, etc..
  "day_part" VARCHAR(45),
--   MORNING
--   AFTERNOON
--   NIGHT
  "hour" INTEGER DEFAULT NULL,
  "minute" INTEGER DEFAULT NULL,
  "second" INTEGER DEFAULT NULL,
  "accuracy" VARCHAR(45)-- describes accuracy of the date from 1 to 10
);
