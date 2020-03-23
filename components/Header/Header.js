import React from "react";
import Link from "next/link";

import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/new">
            <a>Add project</a>
          </Link>
        </li>

        <li>
          <a href="https://civictechhub.netlify.com/" target="_blank">
            Tech communities agregator 💻
          </a>
        </li>

        <li>
          <a
            href="https://helpwithcovid.com/projects/267-covid-19-projects-aggregator"
            target="_blank"
          >
            Help us 🙏
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
