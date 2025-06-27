import BandSection from './../components/Band-Section/BandSection.jsx'

function BandView({albumData, bandData}) {
  return (
      <div>
        <BandSection albumData={albumData} bandData={bandData}/>
      </div>
  )
}

export default BandView
