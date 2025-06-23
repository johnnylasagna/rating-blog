import BandCard from './Band-Card/BandCard.jsx'
import './BandSection.css'

function BandSection({data}) {
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