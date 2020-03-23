import mongoose from "mongoose";
import config from "../../config";

import ProjectModel from "./models/project";

export default async (req, res) => {
  console.log("1");
  // if (mongoose.connections[0].readyState) return;
  // Using new database connection

  try {
    await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    try {
      const projects = await ProjectModel.find({});
      res.send({
        total: projects.length,
        data: projects
      });

      return;

      console.log(projects);
    } catch (error) {}
  } catch (error) {
    req.send(error);
  }
};
