import './index.css'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkHomeCon = isDarkTheme ? 'dark-home-con' : ''
      const darkHead = isDarkTheme ? 'dark-head' : ''
      const darkPara = isDarkTheme ? 'dark-para' : ''

      return (
        <>
          <Navbar />
          <div className={`home-con ${darkHomeCon}`}>
            <div className="home-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="new-img"
              />
              <h1 className={`head ${darkHead}`}>Lost Your Way?</h1>
              <p className={`para ${darkPara}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
