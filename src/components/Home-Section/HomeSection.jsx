import './HomeSection.css'
import { Link } from 'react-router-dom';

function HomeSection({ albums }) {
    albums = [...albums].reverse();
    return (
        <div className="home-section">
            <div className='home-card'>
                <h1>FPP Album Cover Reveal</h1>
                <div className='home-card-image-row'>
                    <img src='/assets/FPP/cover.jpg' className='home-card-image' />
                </div>
                <div className='home-card-info'>
                    <div className='home-card-album-names'>
                        So what do you guys think about it?
                    </div>
                </div>
                <Link to="/portfolio-view" className='home-card-link'>Click here to see my other songs</Link>
            </div>
            <div className='home-card'>
                <h1>
                    New Albums added
                </h1>
                <div className='home-card-image-row'>
                    {albums.map(album => {
                        const albumNameFixed = album.name.replace(/[.?]/g, '');
                        const imgPath = '/assets/' + album.band + '/' + albumNameFixed + '.jpg';
                        return (
                            <div>
                                <Link to={'../single-album-view/' + album.id} className='home-card-album-link'>
                                    <img key={albumNameFixed} src={imgPath} alt={albumNameFixed} className='home-card-image' />
                                </Link>
                            </div>
                        )
                    })}
                    {/* <div className='home-card-image-text'>.....</div> */}
                </div>
                <Link to="/album-view" className='home-card-link'>Click here to see more albums</Link>
                {/* <p>
                    I've been on an expedition to get you the best music on the planet. I don't think its ending any time soon.
                </p> */}
                <div className='home-card-info'>
                    {albums.map(album => (
                        <div className='home-card-album-names'>
                            {album.name} by {album.band}
                        </div>
                    ))}
                    <div className='home-card-album-names'>
                        were added recently
                    </div>
                </div>
            </div>
            <div className='home-card'>
                <h1>Song Release Dates</h1>
                <div className='home-card-info'>
                    <div className='home-card-album-names'>
                        Failing At Your Own Pace comes out on 4th July
                    </div>
                    <div className='home-card-album-names'>
                        Spectra comes out on 11th July
                    </div>
                    <div className='home-card-album-names'>
                        Untitled song comes out on 18th July
                    </div>
                    <div className='home-card-album-names'>
                        Meanwhile you can check out my other songs and some hints about the new EP
                    </div>
                </div>
                <Link to="/portfolio-view" className='home-card-link'>Click here to see my other songs</Link>
            </div>
        </div>
    )
}

export default HomeSection