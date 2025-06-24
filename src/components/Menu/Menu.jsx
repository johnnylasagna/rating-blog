import './Menu.css'
import Greeting from '../Greeting/Greeting';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className='nav'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/band-view" className='nav-link'>Bands</Link>
            <Link to="/album-view" className='nav-link'>All Albums</Link>
            <Link to="/portfolio-view" className='nav-link'>My music</Link>
            <Link to="/recommendation-view" className='nav-link'>Recommendations</Link>
            <div className='centered-heading'>
                <Greeting />
            </div>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." />
                <button className="search-icon" role="img" aria-label="search">🔍</button>
            </div>
        </nav>
    )
}

export default Menu