import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Maincontent from './components/Maincontent'
import Maindashboard from './components/Dashboard/Maindashboard'
import { Route, Routes } from 'react-router-dom'
import Services from './components/configuration/Services'
import Fonction from './components/configuration/Fonction'
import Employes from './components/employe/ListeEmploye'
import CreerEmploye from './components/employe/CreerEmploye'
import ListeEmploye from './components/employe/ListeEmploye'
import RechercheEmploye from './components/employe/RechercheEmploye'
import Footer from './components/Footer.jsx';

import './assets/new/js/app.js';


function App() {
  const [count, setCount] = useState(0)

  const headerStyle = {
    backgroundColor: '#af1115',
    // padding: '10px',
    // textAlign: 'center',
  };


  return (
    <>
      <Sidebar></Sidebar>
      <div className="dashboard-main">
        <Header></Header>
        <div className="dashboard-main-body">
        <Routes>
          <Route path="/" element={<Maindashboard />} />
          <Route path="/fonction" element={<Fonction />} />
          <Route path="/services" element={<Services />} />
          <Route path="/employes" element={<Employes />} />
          <Route path="/CreerEmploye" element={<CreerEmploye />} />
          <Route path="/Employes" element={<ListeEmploye />} />
          <Route path="/RechercheEmploye" element={<RechercheEmploye />} />
        </Routes>
        </div>

        <Footer></Footer>
      </div>


    
    </>

    
  )
}

export default App
