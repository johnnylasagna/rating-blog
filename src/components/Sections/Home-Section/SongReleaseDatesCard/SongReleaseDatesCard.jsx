import './SongReleaseDatesCard.css';
import { Link } from 'react-router-dom';

function SongReleaseDatesCard() {
    return (
        <div className='songrelease-card'>
            <h1>Song Release Dates</h1>
            <div className='songrelease-card-info'>
                <div className='songrelease-card-album-names'>
                    Failing At Your Own Pace comes out on 4th July
                </div>
                <div className='songrelease-card-album-names'>
                    Spectra comes out on 11th July
                </div>
                <div className='songrelease-card-album-names'>
                    Untitled song comes out on 18th July
                </div>
                <div className='songrelease-card-album-names'>
                    Meanwhile you can check out my other songs and some hints about the new EP
                </div>
            </div>
            <Link to="/portfolio-view" className='songrelease-card-link'>Click here to see my other songs</Link>
        </div>
    );
}

export default SongReleaseDatesCard;
