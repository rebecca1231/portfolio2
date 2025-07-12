import rebLogo from '../../assets/rebLogo.jpg'

import navStyles from './nav.module.scss'

export function Header() {
  return (
    <header className={navStyles.header}>
      <nav>
        <ul className={navStyles.navList}>
          <li>
            <div className={navStyles.title} onClick={() => {}}>
              <img src={rebLogo} alt='logo' className={navStyles.img} />
            </div>
          </li>

          <li>
            <div
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              onClick={() => history.push('/about')}
            >
              About
            </div>
          </li>
          <li>
            <div
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              onClick={() => history.push('/contact')}
            >
              Contact
            </div>
          </li>
          <li>
            <div
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              onClick={() => history.push('/projects')}
            >
              Projects
            </div>
          </li>
          <li>
            <a
              className={navStyles.navItem}
              activeClassName={navStyles.activeNavItem}
              href='https://blog.rebeccapage.org'
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
