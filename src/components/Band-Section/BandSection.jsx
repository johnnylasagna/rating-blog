import BandCard from './Band-Card/BandCard.jsx'
import './BandSection.css'

function BandSection({data}) {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    data = sortedData;
    return (
        <div className='band-section'>
            {data.map(band => (
                <BandCard
                name={band.name}
                albums={band.albums}
                description={band.description} />
            ))}
        </div>
    )
}

export default BandSection