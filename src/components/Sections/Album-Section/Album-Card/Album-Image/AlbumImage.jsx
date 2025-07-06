import './AlbumImage.css'

function AlbumCover({album}) {
    const albumNameFixed = album.name.replace(/[.?]/g, '');
    const albumCover = '/assets/' + album.band + '/' + albumNameFixed + '.jpg'
    return (
        <img src={albumCover} className='album-image'/>
    )
}

export default AlbumCover