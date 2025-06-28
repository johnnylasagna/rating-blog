import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SingleAlbumSection.css'

function SingleAlbumSection({ data }) {
    const { albumId } = useParams();
    // console.log(data.map(a => a.id))
    const album = data.find(a => a.id === Number(albumId))
    // console.log(data)
    // console.log(album)
    const albumNameFixed = album.name.replace(/[.?]/g, '');
    const albumPath = '/assets/' + album.band + '/' + albumNameFixed + '.jpg'

    if (!album) return <div>Album not found</div>;

    const sameBandAlbums = data.filter(a => a.band === album.band && a.id !== album.id);
    console.log(sameBandAlbums)

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
                <div className='single-album-recommendations'>
                    <h1>More albums you could check out</h1>
                    <div className='single-album-recommendations-images'>
                        {sameBandAlbums.map(album => (
                            <Link to={'../single-album-view/' + album.id} className='single-album-recommendation-link'>
                                <img src={'/assets/' + album.band + '/' + album.name.replace(/[.?]/g, '') + '.jpg'} alt={album} className='single-album-recommendations-img' />
                                <div>{album.name}</div>
                            </Link>
                        ))}
                        {(sameBandAlbums.length === 0) && <div>Looks like this band doesn't have any other albums I've reviewed yet</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleAlbumSection