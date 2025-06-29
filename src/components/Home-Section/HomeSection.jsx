import './HomeSection.css'
import { Link } from 'react-router-dom';

function HomeSection({ albums }) {
    albums = [...albums].reverse();
    return (
        <div className="home-section">
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
                <h1>Failing At Your Own Pace coming out on 4th July</h1>
                <div className='home-card-info'>
                    <div className='home-card-album-names'>
                        This is going to be my first song that exclusively uses electric guitar
                    </div>
                    <div className='home-card-album-names'>
                        I've also heard there's going to be a music video accompanying it
                    </div>
                    <div className='home-card-album-names'>
                        There could also be a bonus track a few days later
                    </div>
                    <div className='home-card-album-names'>
                        Meanwhile you can check out my other songs and some hints about the new EP
                    </div>
                </div>
                <Link to="/portfolio-view" className='home-card-link'>Click here to see my other songs</Link>
            </div>
            <div className='home-card'>
                <h1>Spectra coming out on 11th July</h1>
                <div className='home-card-info'>
                    <div className='home-card-album-names'>
                        This is going to be a fun one, its all electronic now
                    </div>
                </div>
                <Link to="/portfolio-view" className='home-card-link'>Click here to see my other songs</Link>
            </div>
            <div className='home-card'>
                <h1>Untitled song coming out on 18th July</h1>
                <div className='home-card-info'>
                    <div className='home-card-album-names'>
                        I still don't know what to name this? Maybe you guys can suggest something
                    </div>
                </div>
                <Link to="/portfolio-view" className='home-card-link'>Click here to see my other songs</Link>
            </div>
        </div>
    )
}

export default HomeSection