import './App.css'

import HomeView from './pages/HomeView.jsx'
import BandView from './pages/BandView.jsx'
import AlbumView from './pages/AlbumView.jsx'
import PortfolioView from './pages/PortfolioView.jsx'
import AboutView from './pages/AboutView.jsx'
import SingleAlbumView from './pages/SingleAlbumView.jsx'
import Menu from './components/Menu/Menu.jsx'
import SocialLinks from './components/Social-Links/SocialLinks.jsx'

import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

// addDoc
// import {writeAlbumsToFirestore} from './DataWriter.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import portfolioData from './data/portfolioData.json'
import homeData from './data/homeData.json'
import lyricData from './data/lyricData.json'

import { useEffect, useState } from 'react';
import LyricView from './pages/LyricView.jsx'


function App() {
  const [albumData, setAlbumData] = useState([]);
  const [bandData, setBandData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const albumsCollection = collection(db, 'albums');
      const bandsCollection = collection(db, 'bands');
      const [albumSnapshot, bandSnapshot] = await Promise.all([
        getDocs(albumsCollection),
        getDocs(bandsCollection)
      ]);
      const albums = albumSnapshot.docs.map(doc => doc.data());
      const bands = bandSnapshot.docs.map(doc => doc.data());
      setAlbumData(albums);
      setBandData(bands);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='loading-screen-wrapper'>
        <div className='loading-screen'>Loading...</div>
      </div>
    )
  }

  return (
    <Router>
      <div className='app-ui'>
        {/* <div> */}
          <Menu />
        {/* </div> */}
        <Routes>
          <Route path="/" element={<HomeView data={albumData} />} />
          <Route path="/about" element={<AboutView data={homeData} />} />
          <Route path="/band-view" element={<BandView albumData={albumData} bandData={bandData} />} />
          <Route path="/album-view" element={<AlbumView data={albumData} />} />
          <Route path="/portfolio-view" element={<PortfolioView data={portfolioData} lyricData={lyricData} />} />
          <Route path="/single-album-view/:albumId" element={<SingleAlbumView data={albumData} />} />
          <Route path="/lyric-view/:lyricId" element={<LyricView data={lyricData} />} />
        </Routes>
        <div>
          <SocialLinks />
        </div>
      </div>
    </Router>
  )
}

export default App
