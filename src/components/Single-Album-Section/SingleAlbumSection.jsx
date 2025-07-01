
import { useParams } from 'react-router-dom';
import './SingleAlbumSection.css';
import SingleAlbumDetails from './SingleAlbumDetails/SingleAlbumDetails';
import SingleAlbumTrackList from './SingleAlbumTrackList/SingleAlbumTrackList';
import SingleAlbumRecommendations from './SingleAlbumRecommendations/SingleAlbumRecommendations';

function SingleAlbumSection({ data }) {
    const { albumId } = useParams();
    // console.log(data.map(a => a.id))

    const album = data.find(a => a.id === Number(albumId));
    if (!album) return <div>Album not found</div>;
    const albumNameFixed = album.name.replace(/[.?]/g, '');
    const albumPath = '/assets/' + album.band + '/' + albumNameFixed + '.jpg';
    const sameBandAlbums = data.filter(a => a.band === album.band && a.id !== album.id);

    return (
        <div className='single-album'>
            <div className='single-album-card'>
                <SingleAlbumDetails album={album} albumPath={albumPath} />
                <SingleAlbumTrackList trackList={album.trackList} />
                <SingleAlbumRecommendations sameBandAlbums={sameBandAlbums} band={album.band} />
            </div>
        </div>
    );
}

export default SingleAlbumSection