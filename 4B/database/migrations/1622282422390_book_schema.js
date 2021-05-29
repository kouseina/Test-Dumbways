"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BookSchema extends Schema {
  up() {
    this.create("books", (table) => {
      table.increments();
      table.string("name", 200);
      table.integer("category_id").unsigned();
      table.integer("writer_id").unsigned();
      table.string("publication_year");
      table.string("img");
      table.timestamps();

      table
        .foreign("category_id")
        .references("id")
        .inTable("categories")
        .onDelete("cascade");
      table
        .foreign("writer_id")
        .references("id")
        .inTable("writers")
        .onDelete("cascade");
    });
  }

  down() {
    this.drop("books");
  }
}

module.exports = BookSchema;
