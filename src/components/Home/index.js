import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
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
                    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                }
                alt="home"
                className="img"
              />
            </div>
            <h1 className={`head ${darkHead}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
