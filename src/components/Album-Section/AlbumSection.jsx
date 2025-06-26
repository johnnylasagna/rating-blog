import AlbumCard from './Album-Card/AlbumCard.jsx'
import './AlbumSection.css'

function AlbumSection({data}) {

    data.sort((a, b) => b.rating - a.rating);
    console.log(data)
    
    return (
        <div className='album-section'>
            <AlbumCard albums={data} />
        </div>
    )
}

export default AlbumSection