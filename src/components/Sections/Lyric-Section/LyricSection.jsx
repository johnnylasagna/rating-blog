import './LyricSection.css';
import { useParams } from 'react-router-dom';

function LyricSection({ data }) {
    const { lyricId } = useParams();
    // console.log(lyricId)
    const song = data.find(item => item.id === Number(lyricId));
    return (
        <div className="lyric-section">
            <div className='lyric-card'>
                <div className='lyric-box'>
                    <div className='lyric-song'>
                        <h1>{song.name}</h1>
                    </div>
                    <div className='lyric-content'>
                        <div className='lyrics'>
                            {song.lyrics.split('\n\n').map((para, idx) => (
                                <div key={idx} className='lyrics-lyric'>
                                    {para.split('\n').map(line => (
                                        <div>{line}<br /></div>
                                    ))}
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='lyric-video'>
                    <h1>Video</h1>
                    <iframe
                        src={`https://www.youtube.com/embed/${song.link}`}
                        title="YouTube video player"
                        frameborder="0"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className='lyric-video-player'
                    />
                </div>
            </div>
        </div>
    );
}

export default LyricSection;