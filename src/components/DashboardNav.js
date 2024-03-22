// import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';

// import { SidebarData } from './SidebarData';
// import './DashboardNav.css';
// import { IconContext } from 'react-icons';



// function DashboardNav() {
//     const [sidebar, setSidebar] = useState(false);
//     const showSidebar = () => setSidebar(!sidebar);
//     return (
//       <>
//           <IconContext.Provider value={{ color: '#fff' }}>
//               <div className='dashbar'>
//                   <Link to='#' className='dashbar-menu-bars'>
//                       <FaIcons.FaBars onClick={showSidebar} />
//                   </Link>
//               </div>
//               <nav className={sidebar ? 'dashbar-nav-menu active' : 'dashbar-nav-menu'}>
//                   <ul className='dashbar-nav-menu-items' onClick={showSidebar}>
//                       <li className='dashbar-navbar-toggle'>
//                           <Link to='#' className='dashbar-menu-bars'>
//                               <AiIcons.AiOutlineClose />
//                           </Link>
//                       </li>
//                       {SidebarData.map((item, index) => {
//                           return (
//                               <li key={index} className={item.cName}>
//                                   <Link to={item.path}>
//                                       {item.icon}
//                                       <span>{item.title}</span>
//                                   </Link>
//                               </li>
//                           );
//                       })}
//                   </ul>
//               </nav>
//           </IconContext.Provider>
//       </>
//   );
// }

// export default DashboardNav;

// DashboardNav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import styles from './DashboardNav.module.css'; // Import as a module
import { IconContext } from 'react-icons';

function DashboardNav() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={styles.navbar}>
                    <Link to='#' className={styles['menu-bars']}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
                    <ul className={styles['nav-menu-items']} onClick={showSidebar}>
                        <li className={styles['navbar-toggle']}>
                            <Link to='#' className={styles['menu-bars']}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={styles[item.cName]}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default DashboardNav;














//   return (
//     <>
//     <div className='navbar'>
//         <Link to='#' className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//         </Link>
//     </div>
//     <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
//         <ul className='nav-menu-items'>
//             <li className='navbar-toggle'>
//                 <Link to='#' className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//                 </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//                 return (
//                     <li key={index} className='item.cName'>
//                         <Link to={item.path}>
//                             {item.icon}
//                             <span>{item.title}</span>
//                         </Link>
//                     </li>
//                 )
//             })}
//         </ul>
//     </nav>
//     </>
//   )
// return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <Link to='#' className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );

// }

// export default DashboardNav
