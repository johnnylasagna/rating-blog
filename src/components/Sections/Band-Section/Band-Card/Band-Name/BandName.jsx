import './BandName.css'

function BandName({name, onClick}) {
    return (
        <div className='band-name' onClick={onClick}><p>{name}</p></div>
    )
}

export default BandName