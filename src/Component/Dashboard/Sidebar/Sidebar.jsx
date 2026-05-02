import React from 'react'
import styles from "./Sidebar.module.css"
function Sidebar() {
    const Links= [
        { icon:"fa-chart-column" , title: "Status"},
        { icon:"fa-users" , title: "Users Management"},
        { icon:"fa-building" , title: "Projects Management"},
        { icon:"fa-building" , title: "Developers Management"},
        { icon:"fa-globe" , title: "CMS"},
        { icon:"fa-message" , title: "Live Chat"}

    ];
  return ( 
  <aside className={`${styles.Sidebar} min-vh-100 py-4`}>
    <div className="fw-semibold px-3 mb-4 fs-4">Dashboard</div>
    <nav>
        { Links.map((item, index )=>(
            <div className={`${styles.navItem} d-flex align-items-center gap-2 px-3 py-4`} key={index}><i className={` fa-solid ${item.icon} fs-3`}></i>
            <span className={`${styles.title}`}> {item.title}</span>
            </div>
             
        ))}
    </nav>

  </aside>
   
  )
}
export default Sidebar;