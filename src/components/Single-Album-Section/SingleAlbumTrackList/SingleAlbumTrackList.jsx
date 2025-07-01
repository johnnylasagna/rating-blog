import './SingleAlbumTrackList.css';

function SingleAlbumTrackList({ trackList }) {
    return (
        <div className='single-album-trackList'>
            <h1>Tracklist</h1>
            {trackList.map((track, idx) => (
                <div className='single-album-track' key={idx}>{track}</div>
            ))}
        </div>
    );
}

export default SingleAlbumTrackList;
