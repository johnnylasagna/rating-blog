import BandSection from '../components/Sections/Band-Section/BandSection.jsx'

function BandView({albumData, bandData}) {
  return (
      <div>
        <BandSection albumData={albumData} bandData={bandData}/>
      </div>
  )
}

export default BandView
