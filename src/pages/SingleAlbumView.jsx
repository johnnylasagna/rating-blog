import SingleAlbumSection from '../components/Single-Album-Section/SingleAlbumSection.jsx'
import { useParams } from 'react-router-dom';

function SingleAlbumView({data}) {
    const { albumId } = useParams();
    // console.log(data.map(a => a.id))

    const album = data.find(a => a.id === Number(albumId));
    if (!album) return <div>Album not found</div>;
    const albumNameFixed = album.name.replace(/[.?]/g, '');
    const albumPath = '/assets/' + album.band + '/' + albumNameFixed + '.jpg';
    const sameBandAlbums = data.filter(a => a.band === album.band && a.id !== album.id);
    return (
        <div>
            <SingleAlbumSection album={album} albumPath = {albumPath} sameBandAlbums= {sameBandAlbums} id={albumPath}/>
        </div>
    )
}

export default SingleAlbumView