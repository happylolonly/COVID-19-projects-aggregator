import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import "./index.scss";

const data = [
  {
    title: "Help with COVID",
    href: "https://helpwithcovid.com",
    description:
      "New or established projects helping with the COVID-19 crisis that need help. Volunteer yourself or create a new one."
  },
  {
    title: "COVIDbase",
    href: "https://covidbase.com",
    description:
      "The goal of COVIDbase is to link people who have skills to relevant projects and to inspire new ideas. We created COVIDbase after seeing a lot of various efforts happening in different places and wanted to see all the projects in one spot. While many projects are not open to join, such as pharma or government efforts, we believe they're important to stay abreast of and inspired by."
  },
  {
    title: "Open-Source-COVID-19",
    href: "http://open-source-covid-19.weileizeng.com/",
    description:
      "Open Source COVID-19 collects open source projects during COVID-19. The projects are not necessarily hosted on GitHub, as long as it coroprates in an open source way, that everyone can access, inspect and improve it. The goal of this navigation site is to help people access data, contribute to the projects, and trigger new ideas."
  },

  {
    title: "awesome-coronavirus",
    href: "https://github.com/soroushchehresa/awesome-coronavirus",
    description:
      "🦠Useful projects and resources for COVID-19 (2019 novel Coronavirus)"
  },
  {
    title: "COVID-19 Projects",
    href:
      "https://docs.google.com/document/d/1c97cUL2tXHfxUu_GNhwdBV1W7ncY0gZ42ObwiiAYqIs",
    description:
      "A directory of initiatives related to COVID-19, what they need, and proposals for new initiatives."
  }
];

const Home = () => (
  <div className="container landing-page">
    <Head>
      <title>COVID-19 projects aggregator 🦠 😷</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <Header /> */}

    <main>
      <h1>How can I help with COVID-19?</h1>

      <h2>Already established Project Sites</h2>

      {data.map(item => {
        const { title, description, href } = item;
        return (
          <div className="card website">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {href}
            </a>
          </div>
        );
      })}

      <a
        className="card suggest"
        href="mailto:happylolonly@gmail.com"
        target="_blank"
      >
        Suggest another Project Site to be added
      </a>
    </main>
    {/* <Footer /> */}
  </div>
);

export default Home;
