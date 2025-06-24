import './AlbumCover.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function AlbumCover({ album, name }) {
    const [showInfo, setShowInfo] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const albumCover = '/assets/' + name + '/' + album.name + '.jpg'

    const handleMouseEnter = () => setShowInfo(true)
    const handleMouseLeave = () => setShowInfo(false)
    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX + 10, y: e.clientY + 15 })
    }

    const albumInfo = showInfo ? (
        <div className="album-info" style={{left: mousePos.x, top: mousePos.y}}>
            <div>{album.name}</div>
            <div>Rating: {album.rating}</div>
            <div>{album.description}</div>
        </div>
    ) : null

    return (
        <div className="album-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <img src={albumCover} alt={album.name} className="album-cover" />
            {ReactDOM.createPortal(albumInfo, document.getElementById('album-info-root'))}
        </div>
    )
}

export default AlbumCover