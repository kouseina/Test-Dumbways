"use strict";

const Writer = use("App/Models/Writer");

class WriterController {
  async index({ request, response, view }) {
    const writers = await Writer.all();

    return view.render("writers.index", { writers: writers.rows });
  }

  create({ request, response, view }) {
    return view.render("writers.create");
  }

  async store({ request, response, view, session }) {
    const writer = new Writer();

    writer.name = request.input("name");
    writer.age = request.input("age");
    await writer.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.route("writers.index");
  }

  async edit({ request, response, view, params }) {
    const id = params.id;
    const writer = await Writer.find(id);

    return view.render("writers.edit", { writer: writer });
  }

  async update({ request, response, view, params, session }) {
    const id = params.id;
    const writer = await Writer.find(id);

    writer.name = request.input("name");
    writer.age = request.input("age");
    await writer.save();

    session.flash({ notification: "Data Berhasil Diupdate!" });
    return response.route("writers.index");
  }

  async delete({ request, response, view, params, session }) {
    const id = params.id;
    const writer = await Writer.find(id);
    await writer.delete();

    session.flash({ notification: "Data Berhasil Dihapus!" });
    return response.route("writers.index");
  }
}

module.exports = WriterController;
