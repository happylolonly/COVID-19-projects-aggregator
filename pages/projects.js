import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Projects = () => (
  <div className="container">
    <Head>
      <title>COVID-19 projects aggregator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <h3>Projects page</h3>

    <p>Here COVID-19 projects will be</p>

    <Footer />
  </div>
);

export default Projects;
