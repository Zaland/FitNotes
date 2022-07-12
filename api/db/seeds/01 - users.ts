import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: "ff3a5bd5-3baa-4054-ae3e-13349a200cf6",
      first_name: "Zaland",
      last_name: "Khan",
      email: "zalandkhan1@gmail.com",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
