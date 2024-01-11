import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkHomeCon = isDarkTheme ? 'dark-home-con' : ''
      const darkHead = isDarkTheme ? 'dark-head' : ''

      return (
        <>
          <Navbar />
          <div className={`home-con ${darkHomeCon}`}>
            <div className="home-card">
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                }
                alt="about"
                className="img"
              />
            </div>
            <h1 className={`head ${darkHead}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
