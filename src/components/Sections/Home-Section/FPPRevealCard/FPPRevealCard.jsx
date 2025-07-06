import './FPPRevealCard.css';
import { Link } from 'react-router-dom';

function FPPRevealCard() {
    return (
        <div className='fpp-card'>
            <h1>FPP Album Cover Reveal</h1>
            <div className='fpp-card-image-row'>
                <img src='/assets/FPP/cover.jpg' className='fpp-card-image' />
            </div>
            <div className='fpp-card-info'>
                <div className='fpp-card-album-names'>
                    So what do you guys think about it?
                </div>
                <div className='fpp-card-album-names'>
                    The music video for Failing At Your Own Pace is out now!
                </div>
            </div>
            <Link to="/portfolio-view" className='fpp-card-link'>Click here to see my other songs</Link>
        </div>
    );
}

export default FPPRevealCard;
