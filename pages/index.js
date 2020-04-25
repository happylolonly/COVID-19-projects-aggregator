import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import "./index.scss";

// const data = [

// ];

const Home = () => (
  <div className="container landing-page">
    <Head>
      <title>COVID-19 projects aggregator 🦠 😷</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <Header /> */}

    <main>
      <h1>COVID-19 projects lists</h1>

      <p>
        Want to help to fight with COVID-19? There are a lot of projects are in
        development right now and they are looking for help!
        <br />
        <br />
        We have collected links with projects, just choose what you like and
        let's defeat COVID-19 🦠🚫 together!
      </p>

      <div className="links">
        <a
          href="https://docs.google.com/spreadsheets/d/1bvNhiTVJvh4g48ITTgVYPqmoBxXAL_h2ElD9geR8_XI/edit#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          class="card excel-link"
        >
          Excel
        </a>

        {/* {data.map(item => {
        const { title, description, href } = item;
        return (
          <div className="card website">
            <header>
              <h3>{title}</h3>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {href}
              </a>
            </header>
            <p>{description}</p>
          </div>
        );
      })} */}

        <a
          className="card"
          href="mailto:happylolonly@gmail.com"
          target="_blank"
        >
          Suggest another Project Site to be added!
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
