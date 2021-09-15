var mongoose = require('mongoose');

var CountSchema = new mongoose.Schema({
  MeetingId: String,
  updated_at: { type: Number, default: Date.now },
});
const Count = mongoose.model("NewCounts", CountSchema);
module.exports = Count