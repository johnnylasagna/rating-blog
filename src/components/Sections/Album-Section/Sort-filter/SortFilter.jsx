import './SortFilter.css'

import { useState } from 'react'

function SortFilter({onClickAlbum, onClickBands, onClickYear}) {

    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(!expanded)
    }

    return (
        <div className="sort-filter">
            <button className='sort-filter-toggle' onClick={handleClick}>Sort By</button>
            {expanded && <div className='sort-filter-options'>
                    <button className='sort-filter-button' onClick={onClickAlbum}>Album Name</button>
                    <button className='sort-filter-button' onClick={onClickBands}>Band Name</button>
                    <button className='sort-filter-button' onClick={onClickYear}>Release Year</button>
            </div>}
        </div>
    )
}

export default SortFilter