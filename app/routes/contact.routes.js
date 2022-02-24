const express = require("express");
const contact = require("../controllers/contact.controller");

module.exports = (app) => {
  const router = express.Router();

  //Create a new contact
  router.post("/", contact.create);

  //Retrieve all contacts
  router.get("/", contact.findAll);

  //Retreive all favourite contacts
  router.get("/favorite", contact.findAllFavorite);

  //Retrieve a single contact with id
  router.get("/:id", contact.findOne);

  //Update a contact with id
  router.put("/:id", contact.update);

  //Delete a contact with id
  router.delete("/:id", contact.delete);

  app.use("/api/contacts", router);
};
