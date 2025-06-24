import AlbumCard from './Album-Card/AlbumCard.jsx'
import './AlbumSection.css'

function AlbumSection({data}) {
    const allAlbums = data.flatMap(band => 
        band.albums.map(album => ({ ...album, bandName: band.name }))
    );

    allAlbums.sort((a, b) => b.rating - a.rating);
    
    return (
        <div className='album-section'>
            <AlbumCard albums={allAlbums} />
        </div>
    )
}

export default AlbumSection