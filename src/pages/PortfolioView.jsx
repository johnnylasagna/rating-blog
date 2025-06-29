import PortfolioSection from './../components/Portfolio-Section/PortfolioSection.jsx'

function PortfolioView({data, lyricData}) {
  return (
      <div>
        <PortfolioSection data={data} lyricData={lyricData}/>
      </div>
  )
}

export default PortfolioView
