import './NewAlbumsCard.css';
import { Link } from 'react-router-dom';

function NewAlbumsCard({ albums }) {
    return (
        <div className='newalbums-card'>
            <h1>New Albums added</h1>
            <div className='newalbums-card-image-row'>
                {albums.map(album => {
                    const albumNameFixed = album.name.replace(/[.?]/g, '');
                    const imgPath = '/assets/' + album.band + '/' + albumNameFixed + '.jpg';
                    return (
                        <div key={album.id}>
                            <Link to={'../single-album/' + album.id} className='newalbums-card-album-link'>
                                <img src={imgPath} alt={albumNameFixed} className='newalbums-card-image' />
                            </Link>
                        </div>
                    );
                })}
            </div>
            <Link to="/albums" className='newalbums-card-link'>Click here to see more albums</Link>
            <div className='newalbums-card-info'>
                {albums.map(album => (
                    <div className='newalbums-card-album-names' key={album.id}>
                        {album.name} by {album.band}
                    </div>
                ))}
                <div className='newalbums-card-album-names'>
                    were added recently
                </div>
            </div>
        </div>
    );
}

export default NewAlbumsCard;
