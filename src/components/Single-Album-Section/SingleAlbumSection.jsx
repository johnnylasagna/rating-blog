import { useParams } from 'react-router-dom';
import './SingleAlbumSection.css'

function SingleAlbumSection({ data }) {
    const { albumId } = useParams();
    // console.log(data.map(a => a.id))
    const album = data.find(a => a.id === Number(albumId))
    // console.log(data)
    // console.log(album)
    const albumPath = '/assets/' + album.band + '/' + album.name + '.jpg'

    if (!album) return <div>Album not found</div>;

    return (
        <div className='single-album'>
            <div className='single-album-card'>
                <div className='single-album-details'>
                    <h1>{album.name}</h1>
                    <img src={albumPath} alt={album} className='single-album-img' />
                    <h1>Rating: {album.rating}</h1>
                    <div className='single-album-details-description'>Description: {album.description}</div>
                </div>
                <div className='single-album-trackList'>
                    <h1>Tracklist</h1>
                    {album.trackList.map(track => (
                        <div className='single-album-track'>{track}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleAlbumSection