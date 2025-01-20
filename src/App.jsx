import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Maincontent from './components/Maincontent'
import Maindashboard from './components/Dashboard/Maindashboard'
import { Route, Routes} from 'react-router-dom'
import Services from './components/configuration/Services'
import Fonction from './components/configuration/Fonction'
import Employes from './components/employe/ListeEmploye'

function App() {
  const [count, setCount] = useState(0)

  const headerStyle = {
    backgroundColor: '#af1115',
    // padding: '10px',
    // textAlign: 'center',
  };


  return (
   <>
    <section class="body">
      <Header />

      <div className="inner-wrapper">
        <Sidebar />
       
      
          <section role="main" className="content-body">
            <header className="page-header" style={headerStyle} >
              <h2>Blank Page</h2>
              <div className="right-wrapper text-end">
                <ol className="breadcrumbs">
                  <li>
                    <a href="index.html">
                      <i className="bx bx-home-alt" />
                    </a>
                  </li>
                  <li><span>Pages</span></li>
                  <li><span>Blank Page</span></li>
                </ol>
                <a className="sidebar-right-toggle" data-open="sidebar-right"><i className="fas fa-chevron-left" /></a>
              </div>
            </header>
            {/* start: page */}
            <Routes>
          <Route path="/" element={<Maindashboard />} />
          <Route path="/fonction" element={<Fonction />} />
          <Route path="/services" element={<Services />} />
          <Route path="/employes" element={<Employes />} />
        </Routes>
            {/* end: page */}
          </section>









      </div>


        <aside id="sidebar-right" className="sidebar-right">
        <div className="nano">
          <div className="nano-content">
            <a href="#" className="mobile-close d-md-none">
              Collapse <i className="fas fa-chevron-right" />
            </a>
            <div className="sidebar-right-wrapper">
              <div className="sidebar-widget widget-calendar">
                <h6>Upcoming Tasks</h6>
                <div data-plugin-datepicker data-plugin-skin="dark" />
                <ul>
                  <li>
                    <time dateTime="2023-04-19T00:00+00:00">04/19/2023</time>
                    <span>Company Meeting</span>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget widget-friends">
                <h6>Friends</h6>
                <ul>
                  <li className="status-online">
                    <figure className="profile-picture">
                      <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                  <li className="status-online">
                    <figure className="profile-picture">
                      <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                  <li className="status-offline">
                    <figure className="profile-picture">
                      <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                  <li className="status-offline">
                    <figure className="profile-picture">
                      <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </aside>

    </section>
   </>
  )
}

export default App
