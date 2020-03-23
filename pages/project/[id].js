import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";

export default function Post() {
  const router = useRouter();

  const [project, setProject] = useState({});

  const id = router.query.id;

  useEffect(() => {
    id && getProject(id);
  }, []);

  async function getProject(id) {
    console.log(id);

    try {
      const res = await axios.get(`/api/project?id=${id}`);

      console.log(res);

      setProject(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function renderProject() {
    const { title, description, source } = project;

    const f = description.replace("\n", "<br />");
    return (
      <main>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: f }}></p>

        {source && (
          <div className="source">
            Source:
            <a href={"//" + source.href} target="_blank">
              {source.name}
            </a>
          </div>
        )}
      </main>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>COVID-19 projects aggregator 🦠 😷</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Link href="/projects">
        <a>Back</a>
      </Link>

      {!isEmpty(project) && renderProject()}
      <Footer />
    </div>
  );
}
