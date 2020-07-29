const mongoose = require("mongoose");

const { Schema } = mongoose;

const MovieSchema = new Schema({
  userId: Number,
  title: String,
  description: String,
  created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
