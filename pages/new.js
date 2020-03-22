import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NewProject = () => (
  <div className="container">
    <Head>
      <title>COVID-19 projects aggregator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <h3>Add project</h3>
    <p>
      We haven't created functionality to add projects yet 🙈, so please use
      Google Form for now.
    </p>

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfFGNF478cvfi9O0ZX4ShofgtCx6N72xnm81KQV5AheDfVDxQ/viewform?embedded=true"
      width="640"
      height="900"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>

    <Footer />
  </div>
);

export default NewProject;
