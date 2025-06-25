import EPcard from './EP-Card/EPCard.jsx'
import TrackList from './Track-List/TrackList.jsx'
import './PortfolioCard.css'

function PortfolioCard({item}) {
    return (
        <div className="portfolio-card">
            <EPcard name={item.EP}/>
            <TrackList tracks={item.songs}/>
        </div>
    )
}

export default PortfolioCard