import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

const Home = () => (
  <div className="container">
    <Head>
      <title>COVID-19 projects aggregator 🦠 😷</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <h1>All COVID-19 projects in one place</h1>

      <Link href="/projects">
        <a>Check projects</a>
      </Link>
    </main>
    <Footer />
  </div>
);

export default Home;
