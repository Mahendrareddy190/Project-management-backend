const express = require("express");
const {
  getProjectId,
  CreateProject,
  getAllproject,
  getProject,
  updateProject,
  deleteProject,
} = require("../controls/project_data");

const router = express.Router();
router.param("p_id", getProjectId);
router.post("/create", CreateProject);
router.get("/getAllProject", getAllproject);
router.get("/getProject/:p_id", getProject);
router.delete("/deleteProject/:p_id", deleteProject);
router.put("/updateProject/:p_id", updateProject);
module.exports = router;
