import AlbumCover from "./Album-Cover/AlbumCover.jsx";
import AlbumName from "./Album-Name/AlbumName.jsx";
import './AlbumCard.css'

function AlbumCard({albums}) {
    return (
        <div className="album-card">
            {albums.map(album => (
                <div className="album-entry" key={album.bandName + album.name}>
                    <AlbumCover bandName={album.bandName} album={album.name}/>
                    <AlbumName name={album.name}/>
                </div>
            ))}
        </div>
    )
}

export default AlbumCard