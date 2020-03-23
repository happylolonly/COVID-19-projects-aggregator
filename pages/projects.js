import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.scss";
import "./index.scss";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      const response = await axios.get("api/projects");

      setProjects(response.data.data);
      setTotal(response.data.total);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container projects-page">
      <Head>
        <title>COVID-19 projects aggregator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h3>Projects page</h3>

      {total && <p>Total: {total} projects</p>}

      {projects.map(project => {
        const { title, description, source } = project;
        const f = description.replace("\n", "<br />");

        return (
          <div className="project-item">
            <h5>{title}</h5>
            <p dangerouslySetInnerHTML={{ __html: f }}></p>

            {source && (
              <div className="source">
                Source:
                <a href={"//" + source.href} target="_blank">
                  {source.name}
                </a>
              </div>
            )}
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Projects;
