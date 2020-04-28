// include express in order to use methods like .Router()
const express = require("express");
// reference to the users file in order to write using writeJSONFile
const usersFile = __dirname + "/../models/users.json";
// work with array of data from users
const users = require(usersFile);
// helper functions: writeJSONFile & getNewId
const helper = require("../helper/helper");
// setup express router
const router = express.Router();

/**
 * Get all the users but with fewer properties/keys
 */
router.get("/", (req, res) => {
  const userList = users.map((user) => {
    return {
      id: user.id,
      username: user.username,
    };
  });
  res.json(userList);
});

/**
 * Get user by id
 */
router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === req.params.id);
  if (found) {
    res.json(users.filter((user) => user.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `user with ID:${req.params.id} not found` });
  }
});

/**
 * Post new user
 */
router.post("/", (req, res) => {
  const newuser = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    timestamp: req.body.timestamp,
    imageUrl: req.body.imageUrl,
    comments: [],
  };
  if (!newuser.title || !newuser.description || !newuser.imageUrl) {
    return res.status(400).json({
      errorMessage:
        "Please provide title, description, and imageUrl for the user",
    });
  }
  users.push(newuser);
  helper.writeJSONFile(usersFile, users);
  res.json(users);
});

/**
 *  update user with :id
 */
router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === req.params.id);
  if (found) {
    users.forEach((user) => {
      if (user.id === req.params.id) {
        //set this up for the future? idk if we are doing favorites
        //also not sure if this works lol
        user.favorites = user.favorites.push(req.body.favorites);

        user.title = req.body.title ? req.body.title : user.title;
        user.description = req.body.description
          ? req.body.description
          : user.description;
        user.imageUrl = req.body.imageUrl ? req.body.imageUrl : user.imageUrl;
      }
    });
    helper.writeJSONFile(usersFile, users);
    res.json({ msg: "user Updated", users: users });
  } else {
    res
      .status(404)
      .json({ errorMessage: `user with ID: ${req.params.id} not found` });
  }
});

/**
 * Delete user
 */
router.delete("/:id", (req, res) => {
  const found = users.some((user) => user.id === req.params.id);
  if (found) {
    const usersAfterDeletion = users.filter(
      (user) => user.id !== req.params.id
    );
    helper.writeJSONFile(usersFile, usersAfterDeletion);
    res.json({
      msg: `user with ID: ${req.params.id} Deleted`,
      users: usersAfterDeletion,
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: `user with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
