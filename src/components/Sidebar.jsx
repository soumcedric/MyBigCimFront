import React, { PureComponent } from 'react'
import { Link} from 'react-router-dom'


var Sidebar = () => {

    const sidebarStyle = {
       backgroundColor: '#af1115',
        color: '#ffffff'//,  //Example color override
      };

     const  navlink = {
        color: '#ffffff'
      };

  return (
    <aside id="sidebar-left" className="sidebar-left"  >
      <div className="sidebar-header" >
        <div className="sidebar-title" style={sidebarStyle}>Navigation</div>
        <div
          className="sidebar-toggle d-none d-md-block"
          data-toggle-class="sidebar-left-collapsed"
          data-target="html"
          data-fire-event="sidebar-left-toggle" style={sidebarStyle}
        >
          <i className="fas fa-bars" aria-label="Toggle sidebar" />
        </div>
      </div>
      <div className="nano" >
        <div className="nano-content" style={sidebarStyle}>
          <nav id="menu" className="nav-main" role="navigation">
            <ul className="nav nav-main">
              <li>
                <a className="nav-link" href="/" style={navlink}>
                  <i className="bx bx-home-alt" aria-hidden="true" />
                  <span>Dashboard</span>
                </a>
              </li>
                          <li className="nav-parent nav-expanded nav-active">
                              <a className="nav-link" href="#">
                                  <i className="bx bx-cog" aria-hidden="true" />
                                  <span>Configuration</span>
                              </a>
                              <ul className="nav nav-children">
                                  <li>
                                      <a className="nav-link" href="/Services">
                                          Service
                                      </a>
                                  </li>
                                  <li>
                                      <a className="nav-link" href="/fonction">
                                          Fonction
                                      </a>
                                  </li>
                             
                              </ul>
                          </li>

                          <li className="nav-parent nav-expanded nav-active">
                              <a className="nav-link" href="#">
                                  <i className="bx bx-cog" aria-hidden="true" />
                                  <span>Employé</span>
                              </a>
                              <ul className="nav nav-children">
                                  <li>
                                      <a className="nav-link" href="/Services">
                                          Liste des employés
                                      </a>
                                  </li>
                                  <li>
                                      <a className="nav-link" href="/fonction">
                                          Fonction
                                      </a>
                                  </li>
                             
                              </ul>
                          </li>


            
            </ul>
          </nav>
        
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;