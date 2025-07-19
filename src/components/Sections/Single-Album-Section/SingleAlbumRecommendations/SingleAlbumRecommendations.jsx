import { Link } from 'react-router-dom';
import './SingleAlbumRecommendations.css';

function SingleAlbumRecommendations({ sameBandAlbums, band }) {
    return (
        <div className='single-album-recommendations'>
            <h1>More albums by {band}</h1>
            <div className='single-album-recommendations-images'>
                {sameBandAlbums.map(album => (
                    <Link to={'../single-album/' + album.id} className='single-album-recommendation-link' key={album.id}>
                        <img src={'/assets/' + album.band + '/' + album.name.replace(/[.?]/g, '') + '.jpg'} alt={album.name} className='single-album-recommendations-img' />
                        <div>{album.name}</div>
                    </Link>
                ))}
                {(sameBandAlbums.length === 0) && <div>Looks like this band/artist doesn't have any other albums I've reviewed yet</div>}
            </div>
        </div>
    );
}

export default SingleAlbumRecommendations;
