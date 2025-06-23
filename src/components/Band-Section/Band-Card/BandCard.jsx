import AlbumCover from './Album-Cover/AlbumCover.jsx'
import BandName from './Band-Name/BandName.jsx'
import BandDescription from './Band-Description/BandDescription.jsx'

import './BandCard.css'
import {useState} from 'react'

function BandCard({name, albums, description}) {
    const albumsList = albums.map(album => <AlbumCover key={album} album={album} name={name} />)
    const [showAlbums, setShowAlbums] = useState(true)
    function handleClick() {
        setShowAlbums(!showAlbums)
    }
    return (
        <div className='album-box'>
            <BandName name = {name} onClick={handleClick}/>
            {showAlbums &&
                <div className='album-row'>
                    {albumsList}
                </div>
            }
            <BandDescription description = {description} />
        </div>
    )
}

export default BandCard