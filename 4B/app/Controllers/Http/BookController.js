"use strict";

const Book = use("App/Models/Book");
const Category = use("App/Models/Category");
const Writer = use("App/Models/Writer");
const Logger = use("Logger");

class BookController {
  async index({ request, response, view }) {
    const books = await Book.query().with("category").with("writer").fetch();

    return view.render("books.index", {
      books: books.toJSON(),
    });
  }

  async create({ request, response, view }) {
    const categories = await Category.all();
    const writers = await Writer.all();

    return view.render("books.create", {
      categories: categories.rows,
      writers: writers.rows,
    });
  }

  async store({ request, response, view, session }) {
    const book = new Book();

    book.name = request.input("name");
    book.category_id = request.input("category_id");
    book.writer_id = request.input("writer_id");
    book.publication_year = request.input("publication_year");
    book.img = request.input("img");
    await book.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.route("books.index");
  }

  async edit({ request, response, view, params }) {
    const id = params.id;
    const book = await Book.find(id);
    const categories = await Category.all();
    const writers = await Writer.all();

    return view.render("books.edit", {
      book: book,
      categories: categories.rows,
      writers: writers.rows,
    });
  }

  async update({ request, response, view, params, session }) {
    const id = params.id;
    const book = await Book.find(id);

    book.name = request.input("name");
    book.category_id = request.input("category_id");
    book.writer_id = request.input("writer_id");
    book.publication_year = request.input("publication_year");
    book.img = request.input("img");
    await book.save();

    session.flash({ notification: "Data Berhasil Diupdate!" });
    return response.route("books.index");
  }

  async delete({ request, response, view, params, session }) {
    const id = params.id;
    const book = await Book.find(id);
    await book.delete();

    session.flash({ notification: "Data Berhasil Dihapus!" });
    return response.route("books.index");
  }
}

module.exports = BookController;
