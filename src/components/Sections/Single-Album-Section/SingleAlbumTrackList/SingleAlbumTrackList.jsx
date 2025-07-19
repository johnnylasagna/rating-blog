import './SingleAlbumTrackList.css';

function SingleAlbumTrackList({ trackList }) {
    return (
        <div className='single-album-trackList'>
            <h1>Tracklist</h1>
            {trackList.map((track, idx) => (
                <div className='single-album-track' key={idx}>{track}</div>
            ))}
            {(trackList.length === 0) && <div className='single-album-track'>Looks like the developer was too lazy to add all the tracklists</div>}
        </div>
    );
}

export default SingleAlbumTrackList;
