import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar({ isProjectPending, isDeveloperPending }) {
  const Links = [
    { icon: "fa-chart-column", title: "Status", Path: "/" },
    { icon: "fa-users", title: "Users Management", Path: "/users" },
    { icon: "fa-building", title: "Projects Management", Path: "/projects", pending: isProjectPending },
    { icon: "fa-building", title: "Developers Management", Path: "/developers", pending: isDeveloperPending },
    { icon: "fa-globe", title: "CMS" },
    { icon: "fa-message", title: "Live Chat" },
  ];

  return (
    <aside className={`${styles.Sidebar} min-vh-100 py-4`}>
      <div className="fw-semibold px-3 mb-4 fs-4">Dashboard</div>
      <nav>
        {Links.map((item, index) => (
          <NavLink
            to={item.Path}
            className={`${styles.navItem} d-flex align-items-center gap-2 px-3 py-4`}
            key={index}>
            <i className={`fa-solid ${item.icon} fs-3`}></i>
            <span className={`${styles.title}`}>{item.title}</span>

            {item.pending && (
              <span className="badge bg-danger ">Pending</span>
            )}

          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;