import './TrackList.css'

function TrackList({ tracks }) {
    return (
        <div className="track-list">
            {tracks.map(track => (
                <div className="track">
                    <div>{track.name}</div>
                    <div>{track.duration}</div>
                </div>
            ))}
        </div>
    )
}

export default TrackList