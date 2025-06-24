import './Menu.css'
import Greeting from '../Greeting/Greeting';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className='nav'>
            <Link to="/band-view" className='nav-link'>Band view</Link>
            <Link to="/album-view" className='nav-link'>Album view</Link>
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