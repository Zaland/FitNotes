import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: "ff3a5bd5-3baa-4054-ae3e-13349a200cf6",
      auth_id: "64a028ed1a091ad7c244ea5c",
      first_name: "John",
      last_name: "Wick",
      email: "johnwick@gmail.com",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
