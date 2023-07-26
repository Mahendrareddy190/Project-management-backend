const project_data = require("../models/project_data");

exports.getProjectId = (req, res, next, id) => {
  project_data.findById(id).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "can`t create id for project_data",
      });
    }
    req.project_data = data;
    next();
  });
};
exports.CreateProject = async (req, res) => {
  const p_Data = new project_data(req.body);
  var d = await p_Data.save();
  if (!d) {
    return res.status(400).json({
      error: "can`t  save project_data",
    });
  } else {
    res.json(d);
  }
};
exports.getProject = (req, res) => {
  return res.json(req.project_data);
};
exports.getAllproject = (req, res) => {
  project_data
    .find()
    .sort({ createdAt: -1 })
    .exec((err, task) => {
      if (err) {
        return res.status(400).json({
          error: "can't get all project data'",
        });
      }
      res.json(task);
    });
};
exports.updateProject = (req, res) => {
  project_data
    .findOneAndUpdate(
      { _id: req.project_data._id },
      {
        $set: req.body,
      }
    )
    .exec((err, user) => {
      if (err) {
        return res.status(200).json({ message: "project not update" });
      }
      res.json({ message: "successfully Updated" });
    });
};

exports.deleteProject = (req, res) => {
  let s = req.project_data;
  s.remove((err, p_d) => {
    if (err) {
      return res.status(200).json({
        error: "cant delete student",
      });
    }
    res.json({ message: "successfully deleted" });
  });
};
