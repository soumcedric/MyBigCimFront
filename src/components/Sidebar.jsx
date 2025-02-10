import React, { PureComponent } from 'react'
import { Link} from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';
//import '../assets/new/js/custom.js';
import '../assets/new/js/app.js';


var Sidebar = () => {

    const sidebarStyle = {
       backgroundColor: '#af1115',
        color: '#ffffff'//,  //Example color override
      };

     const  navlink = {
        color: '#ffffff'
      };

  return (

   <aside className="sidebar">
  <button type="button" className="sidebar-close-btn">
    <Icon icon="radix-icons:cross-2" />
  </button>
  <div>
    <a href="index.html" className="sidebar-logo">
      <img src="./src/assets/new//images/logo.png"  className="light-logo" />
      <img src="./src/assets/new/images/logo-light.png"  className="dark-logo" />
      <img src="./src/assets/new/images/logo-icon.png"  className="logo-icon" />
    </a>
  </div>
  <div className="sidebar-menu-area">
    <ul className="sidebar-menu" id="sidebar-menu">
      <li className="dropdown" id='dash'>
        <a href="#">
          <Icon icon="solar:home-smile-angle-outline" className="menu-icon" />
          <span>Dashboard</span>
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="index.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> AI</a>
          </li>
          <li>
            <a href="index-2.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> CRM</a>
          </li>
          <li>
            <a href="index-3.html"><i className="ri-circle-fill circle-icon text-info-main w-auto" /> eCommerce</a>
          </li>
          <li>
            <a href="index-4.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Cryptocurrency</a>
          </li>
          <li>
            <a href="index-5.html"><i className="ri-circle-fill circle-icon text-success-main w-auto" /> Investment</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-menu-group-title">Paramétrage</li>
      <li>
        <a href="/fonction">  
          <Icon icon="mage:email" className="menu-icon" />
          <span>Fonction</span>
        </a>
      </li>
      <li>
        <a href="/services">
          <Icon icon="bi:chat-dots" className="menu-icon" />
          <span>Service</span> 
        </a>
      </li>
      <li>
        <a href="calendar-main.html">
          <Icon icon="solar:calendar-outline" className="menu-icon" />
          <span>Calendar</span> 
        </a>
      </li>
      <li className="dropdown">
        <a href="#">
          <Icon icon="hugeicons:invoice-03" className="menu-icon" />
          <span>Invoice</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="invoice-list.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> List</a>
          </li>
          <li>
            <a href="invoice-preview.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Preview</a>
          </li>
          <li>
            <a href="invoice-add.html"><i className="ri-circle-fill circle-icon text-info-main w-auto" /> Add new</a>
          </li>
          <li>
            <a href="invoice-edit.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Edit</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-menu-group-title">Employés</li>
      <li>
        <a href="/creerEmploye">  
          <Icon icon="mage:email" className="menu-icon" />
          <span>Créer employé</span>
        </a>
      </li>
      <li>
        <a href="/employes">
          <Icon icon="bi:chat-dots" className="menu-icon" />
          <span>Liste des employés</span> 
        </a>
      </li>
      <li>
        <a href="calendar-main.html">
          <Icon icon="solar:calendar-outline" className="menu-icon" />
          <span>Rechercher employé</span> 
        </a>
      </li>
     
      <li className="sidebar-menu-group-title">Application</li> 
      <li className="dropdown">
        <a href="#">
          <Icon icon="solar:document-text-outline" className="menu-icon" />
          <span>Components</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="typography.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Typography</a>
          </li>
          <li>
            <a href="colors.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Colors</a>
          </li>
          <li>
            <a href="button.html"><i className="ri-circle-fill circle-icon text-success-main w-auto" /> Button</a>
          </li>
          <li>
            <a href="dropdown.html"><i className="ri-circle-fill circle-icon text-lilac-600 w-auto" /> Dropdown</a>
          </li>
          <li>
            <a href="alert.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Alerts</a>
          </li>
          <li>
            <a href="card.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Card</a>
          </li>
          <li>
            <a href="carousel.html"><i className="ri-circle-fill circle-icon text-info-main w-auto" /> Carousel</a>
          </li>
          <li>
            <a href="avatar.html"><i className="ri-circle-fill circle-icon text-success-main w-auto" /> Avatars</a>
          </li>
          <li>
            <a href="progress.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Progress bar</a>
          </li>
          <li>
            <a href="tabs.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Tab &amp; Accordion</a>
          </li>
          <li>
            <a href="pagination.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Pagination</a>
          </li>
          <li>
            <a href="badges.html"><i className="ri-circle-fill circle-icon text-info-main w-auto" /> Badges</a>
          </li>
          <li>
            <a href="tooltip.html"><i className="ri-circle-fill circle-icon text-lilac-600 w-auto" /> Tooltip &amp; Popover</a>
          </li>
          <li>
            <a href="videos.html"><i className="ri-circle-fill circle-icon text-cyan w-auto" /> Videos</a>
          </li>
          <li>
            <a href="star-rating.html"><i className="ri-circle-fill circle-icon text-indigo w-auto" /> Star Ratings</a>
          </li>
          <li>
            <a href="tags.html"><i className="ri-circle-fill circle-icon text-purple w-auto" /> Tags</a>
          </li>
          <li>
            <a href="list.html"><i className="ri-circle-fill circle-icon text-red w-auto" /> List</a>
          </li>
          <li>
            <a href="calendar.html"><i className="ri-circle-fill circle-icon text-yellow w-auto" /> Calendar</a>
          </li>
          <li>
            <a href="radio.html"><i className="ri-circle-fill circle-icon text-orange w-auto" /> Radio</a>
          </li>
          <li>
            <a href="switch.html"><i className="ri-circle-fill circle-icon text-pink w-auto" /> Switch</a>
          </li>
          <li>
            <a href="image-upload.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Upload</a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#">
          <Icon icon="heroicons:document" className="menu-icon" />
          <span>Forms</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="form.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Input Forms</a>
          </li>
          <li>
            <a href="form-layout.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Input Layout</a>
          </li>
          <li>
            <a href="form-validation.html"><i className="ri-circle-fill circle-icon text-success-main w-auto" /> Form Validation</a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#">
          <Icon icon="mingcute:storage-line" className="menu-icon" />
          <span>Table</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="table-basic.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Basic Table</a>
          </li>
          <li>
            <a href="table-data.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Data Table</a>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#">
          <Icon icon="solar:pie-chart-outline" className="menu-icon" />
          <span>Chart</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="line-chart.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Line Chart</a>
          </li>
          <li>
            <a href="column-chart.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Column Chart</a>
          </li>
          <li>
            <a href="pie-chart.html"><i className="ri-circle-fill circle-icon text-success-main w-auto" /> Pie Chart</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="widgets.html">
          <Icon icon="fe:vector" className="menu-icon" />
          <span>Widgets</span> 
        </a>
      </li>
      <li className="dropdown">
        <a href="#">
          <Icon icon="flowbite:users-group-outline" className="menu-icon" />
          <span>Users</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="users-list.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Users List</a>
          </li>
          <li>
            <a href="users-grid.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Users Grid</a>
          </li>
          <li>
            <a href="add-user.html"><i className="ri-circle-fill circle-icon text-info-main w-auto" /> Add User</a>
          </li>
          <li>
            <a href="view-profile.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> View Profile</a>
          </li>
        </ul>
      </li>
      <li className="sidebar-menu-group-title">Application</li>
      <li className="dropdown">
        <a href="#">
          <Icon icon="simple-line-icons:vector" className="menu-icon" />
          <span>Authentication</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="sign-in.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Sign In</a>
          </li>
          <li>
            <a href="sign-up.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Sign Up</a>
          </li>
          <li>
            <a href="forgot-password.html"><i className="ri-circle-fill circle-icon text-info-main w-auto" /> Forgot Password</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="gallery.html">
          <Icon icon="solar:gallery-wide-linear" className="menu-icon" />
          <span>Gallery</span> 
        </a>
      </li>
      <li>
        <a href="pricing.html">
          <Icon icon="hugeicons:money-send-square" className="menu-icon" />
          <span>Pricing</span> 
        </a>
      </li>
      <li>
        <a href="faq.html">
          <Icon icon="mage:message-question-mark-round" className="menu-icon" />
          <span>FAQs.</span> 
        </a>
      </li>
      <li>
        <a href="error.html">
          <Icon icon="streamline:straight-face" className="menu-icon" />
          <span>404</span> 
        </a>
      </li>
      <li>
        <a href="terms-condition.html">
          <Icon icon="octicon:info-24" className="menu-icon" />
          <span>Terms &amp; Conditions</span> 
        </a>
      </li>
      <li className="dropdown">
        <a href="#">
          <Icon icon="icon-park-outline:setting-two" className="menu-icon" />
          <span>Settings</span> 
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="company.html"><i className="ri-circle-fill circle-icon text-primary-600 w-auto" /> Company</a>
          </li>
          <li>
            <a href="notification.html"><i className="ri-circle-fill circle-icon text-warning-main w-auto" /> Notification</a>
          </li>
          <li>
            <a href="notification-alert.html"><i className="ri-circle-fill circle-icon text-info-main w-auto" /> Notification Alert</a>
          </li>
          <li>
            <a href="theme.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Theme</a>
          </li>
          <li>
            <a href="currencies.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Currencies</a>
          </li>
          <li>
            <a href="language.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Languages</a>
          </li>
          <li>
            <a href="payment-gateway.html"><i className="ri-circle-fill circle-icon text-danger-main w-auto" /> Payment Gateway</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</aside>


















    // <aside id="sidebar-left" className="sidebar-left"  >
    //   <div className="sidebar-header" >
    //     <div className="sidebar-title" style={sidebarStyle}>Navigation</div>
    //     <div
    //       className="sidebar-toggle d-none d-md-block"
    //       data-toggle-class="sidebar-left-collapsed"
    //       data-target="html"
    //       data-fire-event="sidebar-left-toggle" style={sidebarStyle}
    //     >
    //       <i className="fas fa-bars" aria-label="Toggle sidebar" />
    //     </div>
    //   </div>
    //   <div className="nano" >
    //     <div className="nano-content" style={sidebarStyle}>
    //       <nav id="menu" className="nav-main" role="navigation">
    //         <ul className="nav nav-main">
    //           <li>
    //             <a className="nav-link" href="/" style={navlink}>
    //               <i className="bx bx-home-alt" aria-hidden="true" />
    //               <span>Dashboard</span>
    //             </a>
    //           </li>
    //                       <li className="nav-parent nav-expanded nav-active">
    //                           <a className="nav-link" href="#">
    //                               <i className="bx bx-cog" aria-hidden="true" />
    //                               <span>Configuration</span>
    //                           </a>
    //                           <ul className="nav nav-children">
    //                               <li>
    //                                   <a className="nav-link" href="/Services">
    //                                       Service
    //                                   </a>
    //                               </li>
    //                               <li>
    //                                   <a className="nav-link" href="/fonction">
    //                                       Fonction
    //                                   </a>
    //                               </li>
                             
    //                           </ul>
    //                       </li>

    //                       <li className="nav-parent nav-expanded nav-active">
    //                           <a className="nav-link" href="#">
    //                               <i className="bx bx-cog" aria-hidden="true" />
    //                               <span>Employé</span>
    //                           </a>
    //                           <ul className="nav nav-children">
    //                               <li>
    //                                   <a className="nav-link" href="/Employes">
    //                                       Liste des employés
    //                                   </a>
    //                               </li>
    //                               <li>
    //                                   <a className="nav-link" href="/CreerEmploye">
    //                                       Créer employé
    //                                   </a>
    //                               </li>
    //                               <li>
    //                                   <a className="nav-link" href="/RechercheEmploye">
    //                                       Recherche employé
    //                                   </a>
    //                               </li>
                             
    //                           </ul>
    //                       </li>


            
    //         </ul>
    //       </nav>
        
    //     </div>
    //   </div>
    // </aside>
  );
}

export default Sidebar;