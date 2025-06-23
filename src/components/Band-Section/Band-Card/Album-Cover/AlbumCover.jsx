import './AlbumCover.css'

function AlbumCover({album, name}) {
    const albumCover = '/assets/' + name + '/' + album.name + '.jpg'
    return (
        <div className='album-container'>
            <img src={albumCover} alt={album.name} className="album-cover"></img>
            <div className='album-info'>
                <div>{album.name}</div>
                <div>Rating: {album.rating}</div>
                <div>{album.description}</div>
            </div>
        </div>
    )
}

export default AlbumCover