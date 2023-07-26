const mongoose = require("mongoose");

const project_data = new mongoose.Schema({
  project_name: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
  p_document: {
    type: [],
    trim: true,
    // required: true,
  },
  start_date: {
    type: Date,
    trim: true,
    required: true,
  },
  end_date: {
    type: Date,
    trim: true,
    required: true,
  },
  Notification: {
    type: String,
    trim: true,
    required: true,
  },
  Task_Assign: {
    type: [],
    trim: true,
    // required: true,
  },
  budget: {
    type: Number,
    trim: true,
    required: true,
  },
  Priority: {
    type: String,
    trim: true,
    required: true,
  },
  Description: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("P_Data", project_data);
