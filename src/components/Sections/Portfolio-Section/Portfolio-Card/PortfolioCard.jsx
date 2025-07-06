import EPcard from './EP-Card/EPCard.jsx'
import TrackList from './Track-List/TrackList.jsx'
import './PortfolioCard.css'

function PortfolioCard({item, lyricData}) {
    return (
        <div className="portfolio-card">
            {/* <EPcard name={item.EP}/> */}
            <TrackList tracks={item.songs} year={item.year} name={item.EP} lyricData={lyricData}/>
        </div>
    )
}

export default PortfolioCard