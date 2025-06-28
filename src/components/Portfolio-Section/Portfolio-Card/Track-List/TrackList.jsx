import './TrackList.css'

function TrackList({ tracks, year, name }) {
    return (
        <div className='track-list-wrapper'>
            <div className='track-EP-Name'>
                <h1>{name}</h1>
                <h1 style={{'color' : '#FFC914'}}>{year}</h1>
            </div>
            <div className='track-card'>
                <div className="track-list">
                    {tracks.map(track => (
                        <div className="track">
                            <div>{track.name}</div>
                            <div>{track.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackList