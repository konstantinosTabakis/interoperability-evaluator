// import header from '../assets/img/wave-header.svg'
// import header from '../assets/img/Vector.png'
// import footer from '../assets/img/Footer.png'
import SurveyContext from '../context/SurveyContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
function Home() {


    const {theme, language} = useContext(SurveyContext)
     


    return (
        <div className="homepage">
            <header className='header' style={{ backgroundImage: 'url('+ require(`../assets/img/header-${theme}.png`)+')' }}></header>
            <div className="content">
                <h2 className='centered'> {language.homepage_title} </h2>
                <p>Lorem ipsum dolor sit amet consectetur. Nulla arcu id amet hendrerit. Elit fusce cras nulla feugiat. Ipsum laoreet quisque duis mattis nulla dis consequat diam et. Et tincidunt ullamcorper quis nec tortor aliquam eu. In ultrices at faucibus dignissim in ultricies.</p>
                <div className="centered">
                   <Link to='/survey'><button className="btn"> {language.homepage_cta}</button></Link> 
                </div>
            </div>       
            <footer className='footer' style={{ backgroundImage: 'url('+ require(`../assets/img/footer-${theme}.png`)+')' }}></footer>
        </div>
         
    )
}

export default Home