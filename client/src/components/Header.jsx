import { Link } from 'react-router-dom'
import imgUrl from '../assets/favicon.png'

function Header() {
    return (
        <header className="header">
            <img src={imgUrl} alt="logo" className="header__img"/>
            <h1 className="header__title">NASA Mission Control</h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li><Link to="/launch" className="header__link">Launch</Link></li>
                    <li><Link to="/upcoming" className="header__link">Upcoming</Link></li>
                    <li><Link to="/history" className="header__link">History</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header