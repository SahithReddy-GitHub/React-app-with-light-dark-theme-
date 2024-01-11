import {Link} from 'react-router-dom'
import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const darkNavCon = isDarkTheme ? 'dark-nav-con' : ''
      const darkNavHead = isDarkTheme ? 'dark-nav-head' : ''

      return (
        <nav className={`nav-con ${darkNavCon}`}>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="nav-img"
          />
          <ul className="nav-menu">
            <Link to="/">
              <li>
                <button type="button" className="btn">
                  <h1 className={`nav-head ${darkNavHead}`}>Home</h1>
                </button>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <button type="button" className="btn">
                  <h1 className={`nav-head ${darkNavHead}`}>About</h1>
                </button>
              </li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="btn"
            type="button"
            onClick={toggleTheme}
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="nav-img"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
