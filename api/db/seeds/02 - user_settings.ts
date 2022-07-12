import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user_settings").del();

  // Inserts seed entries
  await knex("user_settings").insert([
    {
      id: "9699db7d-2330-4608-ad3e-0ca4326ac0be",
      user_id: "ff3a5bd5-3baa-4054-ae3e-13349a200cf6",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
