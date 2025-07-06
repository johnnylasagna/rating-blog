import AlbumCard from './Album-Card/AlbumCard.jsx'
import SortFilter from './Sort-filter/SortFilter.jsx';
import SearchFilter from './Search-Filter/SearchFilter.jsx';

import './AlbumSection.css'

import { useState } from 'react';
import { useEffect } from 'react';


function AlbumSection({ data }) {

    const [albumData, setAlbumData] = useState([]);

    const [reverseAlbums, setReverseAlbums] = useState(false);
    const [reverseBands, setReverseBands] = useState(false);
    const [reverseYear, setReverseYear] = useState(false);

    useEffect(() => {
        setAlbumData(data);
    }, [data]);

    function onClickAlbum() {
        let sorted = [...albumData].sort((a, b) => a.name.localeCompare(b.name));
        if (!reverseAlbums) {
            setAlbumData(sorted);
        } else {
            setAlbumData(sorted.reverse());
        }
        setReverseAlbums(!reverseAlbums);
    }

    function onClickBands() {
        let sorted = [...albumData].sort((a, b) => a.band.localeCompare(b.band));
        if (!reverseBands) {
            setAlbumData(sorted);
        } else {
            setAlbumData(sorted.reverse());
        }
        setReverseBands(!reverseBands);
    }

    function onClickYear() {
        let sorted = [...albumData].sort((a, b) => a.year - b.year);
        if (!reverseYear) {
            setAlbumData(sorted);
        } else {
            setAlbumData(sorted.reverse());
        }
        setReverseYear(!reverseYear);
    }

    function updateSearch(searchParameter) {
        if (searchParameter.length > 0) {
            setAlbumData(data.filter(album => album.name.toLowerCase().includes(searchParameter.toLowerCase())));
        }
        else {
            setAlbumData(data)
        }
    }

    return (
        <div className='album-section'>
            <div className='filters'>
                <SortFilter onClickAlbum={onClickAlbum} onClickBands={onClickBands} onClickYear={onClickYear}/>
                <SearchFilter updateSearch={updateSearch}/>
            </div>
            <div>
                <AlbumCard albums={albumData} />
            </div>
        </div>
    );
}

export default AlbumSection