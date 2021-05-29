"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WriterSchema extends Schema {
  up() {
    this.create("writers", (table) => {
      table.increments();
      table.string("name");
      table.string("age");
      table.timestamps();
    });
  }

  down() {
    this.drop("writers");
  }
}

module.exports = WriterSchema;
