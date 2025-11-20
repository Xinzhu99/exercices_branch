import { pgTable, text, serial, integer, pgEnum } from "drizzle-orm/pg-core";

export const themesTable = pgTable("themes", {
    id: serial("id").primaryKey(),
    description: text("description").notNull()
});
//déclarer un const enum en TS:
export const SKILL_STATUS_VALUES = ["Undetermined", "Not aquired","In progress","Aquired"] as const
export const skillsStatus = pgEnum("skill_status", SKILL_STATUS_VALUES)

export const skillsTable = pgTable("skills", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    themeId:integer("theme_id").references(()=> themesTable.id,{onDelete:"set null"}),
    status:skillsStatus("skill_status").notNull().default("undetermined")

});

