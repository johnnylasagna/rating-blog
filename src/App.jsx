import './App.css'
import BandView from './pages/BandView.jsx'
import AlbumView from './pages/AlbumView.jsx'
import Greeting from './components/Greeting/Greeting.jsx'
import Menu from './components/Menu/Menu.jsx'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import data from './data/data.json'

function App() {
  return (
    <Router>
      <div className='app-block'>
        <div className='centered-heading'>
          <Greeting />
        </div>
        <Menu />
      </div>
      <Routes>
        <Route path="/band-view" element={<BandView data={data}/>}/>
        <Route path="/album-view" element={<AlbumView data={data} />}/>
      </Routes>
    </Router>
  )
}

export default App
