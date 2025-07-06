import PortfolioSection from '../components/Sections/Portfolio-Section/PortfolioSection.jsx'

function PortfolioView({data, lyricData}) {
  return (
      <div>
        <PortfolioSection data={data} lyricData={lyricData}/>
      </div>
  )
}

export default PortfolioView
