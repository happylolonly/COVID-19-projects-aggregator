import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => (
  <div className="container">
    <Head>
      <title>COVID-19 projects aggregator 🦠 😷</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>Landing page</main>

    <Footer />
  </div>
);

export default Home;
