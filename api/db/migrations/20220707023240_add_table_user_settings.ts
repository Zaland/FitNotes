import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("user_settings", (table) => {
    table.uuid("id").notNullable().unique();
    table.uuid("user_id").notNullable();
    table.boolean("dark_mode").defaultTo(false);
    table.timestamps(false, true);
  });

  return knex.schema.alterTable("user_settings", (table) => {
    table.foreign("user_id").references("id").inTable("users");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user_settings");
}
