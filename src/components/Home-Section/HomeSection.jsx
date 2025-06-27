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
                                    <img key={albumNameFixed} src={imgPath} alt={albumNameFixed} className='home-card-image' />
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
                    {albums.map(album=>(
                        album.name + ' by ' + album.band + ', '
                    ))}
                    were added recently
                </div>
            </div>
        </div>
    )
}

export default HomeSection