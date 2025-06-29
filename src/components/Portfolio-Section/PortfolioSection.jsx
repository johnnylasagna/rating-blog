import PortfolioCard from './Portfolio-Card/PortfolioCard.jsx'
import './PortfolioSection.css'

function PortfolioSection({data, lyricData}) {
    return (
        <div className='portfolio-section'>
            {data.map(item=>(
                <PortfolioCard item={item} lyricData={lyricData}/>
            ))}
        </div>
    )
}

export default PortfolioSection