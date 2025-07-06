import './SearchFilter.css'

function SearchFilter({updateSearch}) {
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." onChange={e => updateSearch(e.target.value)} />
            {/* <button className="search-icon" role="img" aria-label="search">🔍</button> */}
        </div>
    )
}

export default SearchFilter