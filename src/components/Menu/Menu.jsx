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
                <Link to="/band-view" className={`nav-link${location.pathname === '/band-view' ? ' active' : ''}`}>
                    <FontAwesomeIcon icon={faGuitar} />
                    Bands
                </Link>
                <Link to="/album-view" className={`nav-link${location.pathname === '/album-view' ? ' active' : ''}`}>
                    <FontAwesomeIcon icon={faRecordVinyl} />
                    All Albums
                </Link>
                <Link to="/portfolio-view" className={`nav-link${location.pathname === '/portfolio-view' ? ' active' : ''}`}>
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