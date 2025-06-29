import './TrackList.css'

import { Link } from 'react-router-dom'

function TrackList({ tracks, year, name, lyricData}) {
    return (
        <div className='track-list-wrapper'>
            <div className='track-EP-Name'>
                <h1>{name}</h1>
                <h1 style={{ color: '#FFC914' }}>{year}</h1>
            </div>
            <div className='track-card'>
                <div className="track-list">
                    {tracks.map(track => {
                        const lyricEntry = lyricData.find(l => l.name === track.name);
                        const lyricId = lyricEntry ? lyricEntry.id : '';
                        return (
                            <div className="track" key={track.name}>
                                <Link to={`../lyric-view/${lyricId}`}>
                                    <div>{track.name}</div>
                                    <div>{track.duration}</div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default TrackList