import mongoose from "mongoose";
import config from "../../config";

import ProjectModel from "./models/project";

export default async (req, res) => {
  console.log("get projects");
  // if (mongoose.connections[0].readyState) return;
  // Using new database connection

  try {
    await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    const { id } = req.query;

    const project = await ProjectModel.find({
      _id: id
    });

    res.send(project[0]);

    return;
  } catch (error) {
    console.log(error);

    req.send(error);
  }
};
