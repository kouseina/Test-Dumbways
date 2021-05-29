"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

// Category
Route.get("/categories", "CategoryController.index").as("categories.index");
Route.get("/categories/create", "CategoryController.create").as(
  "categories.create"
);
Route.post("/categories/store", "CategoryController.store").as(
  "categories.store"
);
Route.get("/categories/edit/:id", "CategoryController.edit").as(
  "categories.edit"
);
Route.post("/categories/update/:id", "CategoryController.update").as(
  "categories.update"
);
Route.get("/categories/delete/:id", "CategoryController.delete").as(
  "categories.delete"
);

// Writer
Route.get("/writers", "WriterController.index").as("writers.index");
Route.get("/writers/create", "WriterController.create").as("writers.create");
Route.post("/writers/store", "WriterController.store").as("writers.store");
Route.get("/writers/edit/:id", "WriterController.edit").as("writers.edit");
Route.post("/writers/update/:id", "WriterController.update").as(
  "writers.update"
);
Route.get("/writers/delete/:id", "WriterController.delete").as(
  "writers.delete"
);

// Book
Route.get("/books", "BookController.index").as("books.index");
Route.get("/books/create", "BookController.create").as("books.create");
Route.post("/books/store", "BookController.store").as("books.store");
Route.get("/books/edit/:id", "BookController.edit").as("books.edit");
Route.post("/books/update/:id", "BookController.update").as("books.update");
Route.get("/books/delete/:id", "BookController.delete").as("books.delete");
