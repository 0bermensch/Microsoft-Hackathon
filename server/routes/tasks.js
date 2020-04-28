// include express in order to use methods like .Router()
const express = require("express");
// reference to the tasks file in order to write using writeJSONFile
const tasksFile = __dirname + "/../models/tasks.json";
// work with array of data from tasks
const tasks = require(tasksFile);
// helper functions: writeJSONFile & getNewId
const helper = require("../helper/helper");
// setup express router
const router = express.Router();

/**
 * Get all the tasks but with fewer properties/keys
 */
router.get("/", (req, res) => {
  const taskList = tasks.map((task) => {
    return {
      id: task.id,
      title: task.title,
      owner: task.owner,
      description: task.description,
      date: task.date,
      timestamp: task.timestamp,
      status: task.status,
      percentage: task.percentage,
      imageUrl: task.imageUrl,
    };
  });
  res.json(taskList);
});

/**
 * Get task by id
 */
router.get("/:id", (req, res) => {
  const found = tasks.some((task) => task.id === req.params.id);
  if (found) {
    res.json(tasks.filter((task) => task.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `task with ID:${req.params.id} not found` });
  }
});

/**
 * Post new task
 */
router.post("/", (req, res) => {
  const newtask = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    timestamp: req.body.timestamp,
    status: req.body.status,
    percentage: req.body.percentage,
    imageUrl: req.body.imageUrl,
    owner: req.body.owner,
  };
  // if (!newtask.title || !newtask.description || !newtask.imageUrl) {
  //   return res.status(400).json({
  //     errorMessage:
  //       "Please provide title, description, and imageUrl for the task",
  //   });
  // }
  tasks.push(newtask);
  helper.writeJSONFile(tasksFile, tasks);
  res.json(tasks);
});

/**
 *  update task with :id
 */
router.put("/:id", (req, res) => {
  const found = tasks.some((task) => task.id === req.params.id);
  if (found) {
    tasks.forEach((task) => {
      if (task.id === req.params.id) {
        task.title = req.body.title ? req.body.title : task.title;
        task.description = req.body.description
          ? req.body.description
          : task.description;
        task.imageUrl = req.body.imageUrl ? req.body.imageUrl : task.imageUrl;
      }
    });
    helper.writeJSONFile(tasksFile, tasks);
    res.json({ msg: "task Updated", tasks: tasks });
  } else {
    res
      .status(404)
      .json({ errorMessage: `task with ID: ${req.params.id} not found` });
  }
});

/**
 * Delete task
 */
router.delete("/:id", (req, res) => {
  const found = tasks.some((task) => task.id === req.params.id);
  if (found) {
    const tasksAfterDeletion = tasks.filter(
      (task) => task.id !== req.params.id
    );
    helper.writeJSONFile(tasksFile, tasksAfterDeletion);
    res.json({
      msg: `task with ID: ${req.params.id} Deleted`,
      tasks: tasksAfterDeletion,
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: `task with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
