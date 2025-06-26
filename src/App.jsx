import './App.css'

import HomeView from './pages/HomeView.jsx'
import BandView from './pages/BandView.jsx'
import AlbumView from './pages/AlbumView.jsx'
import PortfolioView from './pages/PortfolioView.jsx'
import AboutView from './pages/AboutView.jsx'
import SingleAlbumView from './pages/SingleAlbumView.jsx'
import Menu from './components/Menu/Menu.jsx'
import SocialLinks from './components/Social-Links/SocialLinks.jsx'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import data from './data/data.json'
import portfolioData from './data/portfolioData.json'
import homeData from './data/homeData.json'
import albumData from './data/albumData.json'

function App() {
  return (
    <Router>
      <div className='app-block'>
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<HomeView data={albumData}/>}/>
        <Route path="/about" element={<AboutView data={homeData}/>}/>
        <Route path="/band-view" element={<BandView data={data}/>}/>
        <Route path="/album-view" element={<AlbumView data={albumData} />}/>
        <Route path="/portfolio-view" element={<PortfolioView data={portfolioData} />}/>
        <Route path="/single-album-view/:albumId" element={<SingleAlbumView data={albumData} />}/>
      </Routes>
      <div>
        <SocialLinks />
      </div>
    </Router>
  )
}

export default App
