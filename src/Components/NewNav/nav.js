import React from "react";
import { useHistory } from "react-router-dom";
import rebLogo from "../../rebLogo.jpg";

import navStyles from "./nav.module.scss";

const Header = () => {
  const history = useHistory();

  return (
    <header className={navStyles.header}>
      <nav>
        <ul className={navStyles.navList}>
          <li>
            <div className={navStyles.title} onClick={() => history.push("/")}>
              <img src={rebLogo} alt="logo" className={navStyles.img} />
            </div>
          </li>

          <li>
            <div
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              onClick={() => history.push("/about")}
            >
              About
            </div>
          </li>
          <li>
            <div
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              onClick={() => history.push("/contact")}
            >
              Contact
            </div>
          </li>
          <li>
            <div
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              onClick={() => history.push("/projects")}
            >
              Projects
            </div>
          </li>
          <li>
            <a
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              href="https://blog.rebeccahirai.com"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
