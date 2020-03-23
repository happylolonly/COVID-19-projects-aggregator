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

    const { limit = 15, offset = 0 } = req.query;

    const find = {};

    const totalProjects = ProjectModel.find(find).count();
    const projects = ProjectModel.find(find)
      .limit(+limit)
      .skip(+offset);

    const r = await Promise.all([totalProjects, projects]);

    res.send({
      total: r[0],
      data: r[1]
    });

    return;
  } catch (error) {
    console.log(error);

    req.send(error);
  }
};
