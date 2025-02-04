import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Maincontent from './components/Maincontent'
import Maindashboard from './components/Dashboard/Maindashboard'
import { BrowserRouter as Router } from 'react-router-dom'
import Services from './components/configuration/Services'
import Fonction from './components/configuration/Fonction'
import Employes from './components/employe/ListeEmploye'
import CreerEmploye from './components/employe/CreerEmploye'
import ListeEmploye from './components/employe/ListeEmploye'
import RechercheEmploye from './components/employe/RechercheEmploye'
import Footer from './components/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';


import './assets/new/js/app.js';
import './assets/new/js/custom.js';
import AuthenticationLayout from './layouts/AuthenticationLayout.jsx'
import SignIn from './components/authentication/SignIn.jsx'
import MainLayout from './layouts/MainLayout.jsx'


function App() {
  // const [count, setCount] = useState(0)

  const headerStyle = {
    backgroundColor: '#af1115',
    // padding: '10px',
    // textAlign: 'center',
  };


  return (
    <>


    {/* <Router> */}
      <AppRoutes/>
    {/* </Router> */}





    </>


  )
}

export default App
