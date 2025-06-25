import PortfolioCard from './Portfolio-Card/PortfolioCard.jsx'
import './PortfolioSection.css'

function PortfolioSection({data}) {
    return (
        <div className='portfolio-section'>
            {data.map(item=>(
                <PortfolioCard item={item} />
            ))}
        </div>
    )
}

export default PortfolioSection