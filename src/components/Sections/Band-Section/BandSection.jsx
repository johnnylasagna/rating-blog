import BandCard from './Band-Card/BandCard.jsx'
import './BandSection.css'

function BandSection({albumData, bandData}) {

    // console.log(albumData)
    // console.log(bandData)

    const albumsByBand = {};
    albumData.forEach(album => {
        if (!albumsByBand[album.band]) {
            albumsByBand[album.band] = [];
        }
        albumsByBand[album.band].push(album);
    });

    const data = Object.keys(albumsByBand).map(bandName => {
        return {
            name: bandName,
            albums: albumsByBand[bandName],
            description: bandData.find(band => band.name === bandName)?.description || ''
        };
    });
    
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className='band-section'>
            {sortedData.map(band => (
                <BandCard
                name={band.name}
                albums={band.albums}
                description={band.description} />
            ))}
        </div>
    )
}

export default BandSection