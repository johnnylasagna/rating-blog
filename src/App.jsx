import './App.css'
import BandSection from './components/Band-Section/BandSection.jsx'
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
        <Route path="/band-view" element={<BandSection data={data}/>}/>
      </Routes>
    </Router>
  )
}

export default App
