import { Link } from 'react-router-dom';

import AlbumCover from "./Album-Image/AlbumImage.jsx";
import AlbumName from "./Album-Name/AlbumName.jsx";
import './AlbumCard.css'

function AlbumCard({albums}) {
    return (
        <div className="album-card">
            {albums.map(album => {
                const linkid = '../single-album-view/' + String(album.id);
                console.log(linkid)
                return (
                    <div className="album-entry" key={album.band + album.name}>
                        <Link to={linkid} className='album-entry-link'>
                            <AlbumCover album={album}/>
                            <AlbumName name={album.name}/>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default AlbumCard