"use strict";

const Category = use("App/Models/Category");

class CategoryController {
  async index({ request, response, view }) {
    const categories = await Category.all();

    return view.render("categories.index", { categories: categories.rows });
  }

  create({ request, response, view }) {
    return view.render("categories.create");
  }

  async store({ request, response, view, session }) {
    const category = new Category();

    category.name = request.input("name");
    await category.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.route("categories.index");
  }

  async edit({ request, response, view, params }) {
    const id = params.id;
    const category = await Category.find(id);

    return view.render("categories.edit", { category: category });
  }

  async update({ request, response, view, params, session }) {
    const id = params.id;
    const category = await Category.find(id);

    category.name = request.input("name");
    await category.save();

    session.flash({ notification: "Data Berhasil Diupdate!" });
    return response.route("categories.index");
  }

  async delete({ request, response, view, params, session }) {
    const id = params.id;
    const category = await Category.find(id);
    await category.delete();

    session.flash({ notification: "Data Berhasil Dihapus!" });
    return response.route("categories.index");
  }
}

module.exports = CategoryController;
