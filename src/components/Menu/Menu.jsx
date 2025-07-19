import './Menu.css'
import Greeting from '../Greeting/Greeting';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRecordVinyl, faMusic, faGuitar, faUser } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const location = useLocation();
    return (
        <div className='app-block'>
            <nav className='nav'>
                {/* <div className='nav-links'> */}
                <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                </Link>
                <Link to="/bands" className={`nav-link${location.pathname === '/bands' ? ' active' : ''}`}>
                    <FontAwesomeIcon icon={faGuitar} />
                    Bands
                </Link>
                <Link to="/albums" className={`nav-link${location.pathname === '/albums' ? ' active' : ''}`}>
                    <FontAwesomeIcon icon={faRecordVinyl} />
                    All Albums
                </Link>
                <Link to="/portfolio" className={`nav-link${location.pathname === '/portfolio' ? ' active' : ''}`}>
                    <FontAwesomeIcon icon={faMusic} />
                    My music
                </Link>
                {/* <Link to="/recommendation-view" className='nav-link'>Recommendations</Link> */}
                {/* </div> */}
                <div className='centered-heading'>
                    <Greeting />
                </div>
                <Link to="/about" className={`nav-link${location.pathname === '/about' ? ' active' : ''}`}
                style={{ marginRight: '0px', marginLeft: 'auto' }}>
                    <FontAwesomeIcon icon={faUser} />
                    About
                </Link>
            </nav>
        </div>
    )
}

export default Menu