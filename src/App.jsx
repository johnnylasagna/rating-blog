import './App.css'
import BandView from './pages/BandView.jsx'
import AlbumView from './pages/AlbumView.jsx'
import PortfolioView from './pages/PortfolioView.jsx'
import HomeView from './pages/HomeView.jsx'
import Menu from './components/Menu/Menu.jsx'
import SocialLinks from './components/Social-Links/SocialLinks.jsx'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import data from './data/data.json'
import portfolioData from './data/portfolioData.json'
import homeData from './data/homeData.json'

function App() {
  return (
    <Router>
      <div className='app-block'>
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<HomeView data={homeData}/>}/>
        <Route path="/band-view" element={<BandView data={data}/>}/>
        <Route path="/album-view" element={<AlbumView data={data} />}/>
        <Route path="/portfolio-view" element={<PortfolioView data={portfolioData} />}/>
      </Routes>
      <div>
        <SocialLinks />
      </div>
    </Router>
  )
}

export default App
