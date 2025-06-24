import './AlbumImage.css'

function AlbumCover({bandName, album}) {
    album = album.replace(/[.?]/g, '');
    const albumCover = '/assets/' + bandName + '/' + album + '.jpg'
    console.log(album)
    return (
        <img src={albumCover} className='album-image'/>
    )
}

export default AlbumCover