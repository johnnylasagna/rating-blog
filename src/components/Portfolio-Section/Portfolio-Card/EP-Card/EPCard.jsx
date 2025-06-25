import './EPCard.css'

function EPCard({name}) {
    const EPCover = '/assets/EP/' + name + '/' + 'Cover.jpg'
    console.log(EPCover)
    return (
        <div className="EP-Card">
            <div className='EP-img-wrapper'>
                <img src={EPCover} alt={name} className='EP-img' />
            </div>
            <div className='EP-Name'>{name}</div>
        </div>
    )
}

export default EPCard