import './SingleAlbumSection.css';
import SingleAlbumDetails from './SingleAlbumDetails/SingleAlbumDetails';
import SingleAlbumTrackList from './SingleAlbumTrackList/SingleAlbumTrackList';
import SingleAlbumRecommendations from './SingleAlbumRecommendations/SingleAlbumRecommendations';

function SingleAlbumSection({ album, albumPath, sameBandAlbums }) {

    return (
        <div className='single-album'>
            <div className='single-album-card'>
                <SingleAlbumDetails album={album} albumPath={albumPath}/>
                <SingleAlbumTrackList trackList={album.trackList} />
                <SingleAlbumRecommendations sameBandAlbums={sameBandAlbums} band={album.band} />
            </div>
        </div>
    );
}

export default SingleAlbumSection