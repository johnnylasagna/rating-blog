import './HomeSection.css';
import FPPRevealCard from './FPPRevealCard/FPPRevealCard';
import NewAlbumsCard from './NewAlbumsCard/NewAlbumsCard';
import SongReleaseDatesCard from './SongReleaseDatesCard/SongReleaseDatesCard';

function HomeSection({ albums }) {
    const reversedAlbums = [...albums].reverse();
    return (
        <div className="home-section">
            <FPPRevealCard />
            <NewAlbumsCard albums={reversedAlbums} />
            {/* <SongReleaseDatesCard /> */}
        </div>
    );
}

export default HomeSection;