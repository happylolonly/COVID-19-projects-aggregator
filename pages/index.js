import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import "./index.scss";

const data = [
  {
    title: "COVID-19 Solutions",
    href: "https://airtable.com/shrPm5L5I76Djdu9B/tbl6pY6HtSZvSE6rJ",
    description: "Large table with COVID-19 solutions"
  },
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
    href: "http://open-source-covid-19.weileizeng.com",
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
  },
  {
    title: "Reddit COVIDProjects",
    href: "https://www.reddit.com/r/COVIDProjects",
    description:
      "Place to discuss, showcase, and ask for help with projects relating to response to COVID-19 and the novel coronavirus."
  },
  {
    title: "",
    href:
      "https://docs.google.com/spreadsheets/d/1i0QdZ1HTi9D9o7FX8Zk-R7EwqiGiqP0LiqcNxA9wYbA/edit#gid=735405623",
    description: "Projects Excel Database"
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
      <h1>COVID-19 projects lists</h1>

      <p>
        Want to help to fight with COVID-19? There are a lot of projects are in
        development right now and they are looking for help!
        <br />
        <br />
        We have collected links with projects, just choose what you like and
        let's defeat COVID-19 🦠🚫 together!
      </p>

      {data.map(item => {
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
      })}

      <a
        className="card suggest"
        href="mailto:happylolonly@gmail.com"
        target="_blank"
      >
        Suggest another Project Site to be added!
      </a>
    </main>
    <Footer />
  </div>
);

export default Home;
