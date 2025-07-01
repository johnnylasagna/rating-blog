import './SingleAlbumDetails.css';

function SingleAlbumDetails({ album, albumPath }) {
    return (
        <div className='single-album-details'>
            <h1>{album.name}</h1>
            <img src={albumPath} alt={album.name} className='single-album-img' />
            <h1>Rating: {album.rating}</h1>
            <div className='single-album-details-description'>Description: {album.description}</div>
        </div>
    );
}

export default SingleAlbumDetails;
