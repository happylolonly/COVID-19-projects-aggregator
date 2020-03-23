const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Project = new schema({
  title: String,
  description: String,
  source: Object
});

// module.exports = eventModel;
let model;
try {
  model = mongoose.model("projects");
} catch (error) {
  model = mongoose.model("projects", Project);
}

module.exports = model;
