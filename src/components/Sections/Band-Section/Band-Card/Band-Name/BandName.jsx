import './BandName.css'

function BandName({name, onClick}) {
    return (
        <div className='band-name' onClick={onClick}>{name}</div>
    )
}

export default BandName