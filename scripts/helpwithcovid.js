const axios = require("axios");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://Admin:fightfortheworld1@ds263856.mlab.com:63856/covid-19-projects-aggregator",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Project = mongoose.model("Project", {
  title: String,
  description: String,
  source: Object
});

(async () => {
  const response = await axios.get(
    "http://www.helpwithcovid.com/projects.json"
  );

  for (let item of response.data) {
    console.log(item);

    const {
      name,
      description,
      participants,
      looking_for,
      location,
      contact,
      to_param
    } = item;

    const project = new Project({
      title: name,
      description: description + "\n" + participants + "\n" + looking_for,
      source: {
        name: "helpwithcovid.com",
        href: `helpwithcovid.com/projects/${to_param}`
      }
    });

    await project.save();
  }
})();
