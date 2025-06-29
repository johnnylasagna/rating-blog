import './Menu.css'
import Greeting from '../Greeting/Greeting';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className='nav'>
            {/* <div className='nav-links'> */}
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/band-view" className='nav-link'>Bands</Link>
                <Link to="/album-view" className='nav-link'>All Albums</Link>
                <Link to="/portfolio-view" className='nav-link'>My music</Link>
                {/* <Link to="/recommendation-view" className='nav-link'>Recommendations</Link> */}
            {/* </div> */}
            <div className='centered-heading'>
                <Greeting />
            </div>
            <Link to="/about" className='nav-link' style={{ marginRight: '0px', marginLeft: 'auto' }}>About</Link>
        </nav>
    )
}

export default Menu