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
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentBottom, setCurrentBottom] = useState(null);
  const limit = 10;
    


  useEffect(() => {
    getProjects();
    changeOffsets();
  }, []);

  async function getProjects() {
    try {
      const response = await axios.get("api/projects", {
        params : {
          offset: currentOffset ? null : 0,
          limit: limit
        }
      });

      setProjects(response.data.data);
      setTotal(response.data.total);
      setPages(Math.ceil(response.data.total / limit));

    } catch (error) {
      console.log(error);
    }
    changeOffsets();
  }

  async function getNext() {
    try {
        const response = await axios.get("api/projects", {
          params : {
            offset: currentOffset,
            limit: limit
          }
        })
        setProjects(response.data.data);
        setCurrentOffset(currentOffset + limit);
        setCurrentPage( currentPage + 1);
      } catch (error) {
        console.log(error);
      }
    }
    async function getPrev() {
      try {
        const response = await axios.get("api/projects", {
          params: {
            offset: (currentOffset - limit),
            limit: limit
          }
        })
        setProjects(response.data.data);
        setCurrentOffset(currentOffset - limit);
        setCurrentPage( currentPage - 1);
      } catch(error) {
        console.log(error);
      }
    }
    function changeOffsets() {
      if (currentOffset === 0) {
        setCurrentOffset(currentOffset + limit);
      }
      if (currentPage === 1){
      setCurrentPage(currentPage + 1);
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
      {pages && <p>{pages} pages</p>}
      <div id="pages"></div>

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

       <div id="pagination">
            {<div id="page-list">Showing {currentOffset} to {currentOffset + limit} of many results <button onClick={getPrev}>Prev</button><button onClick={getNext}>Next</button></div>}
            </div>
      <Footer />
    </div>
  );
};

export default Projects;
