import './Menu.css'
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className='nav'>
            <Link to="/band-view" className='link'>Band view</Link>
            <Link to="/album-view" className='link'>Album view</Link>
            <Link to="recommendations" className='link'>Recommendations</Link>
        </nav>
    )
}

export default Menu