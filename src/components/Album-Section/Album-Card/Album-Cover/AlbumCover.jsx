import './AlbumCover.css'

function AlbumCover({bandName, album}) {
    const albumCover = '/assets/' + bandName + '/' + album + '.jpg'
    return (
        <img src={albumCover} className='album-cover'/>
    )
}

export default AlbumCover