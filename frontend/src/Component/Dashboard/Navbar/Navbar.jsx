import React from "react";
import logo from "../../../assets/axis logo.png";
import styles from "./Navbar.module.css";
function Navbar({adminName ="Super Admin"}) {
  return (
    <nav
      className={`${styles.nav} d-flex justify-content-between align-items-center shadow-sm`}
    >
      <div
        className={`${styles.parentImg} d-flex align-items-center justify-content-center`}
      >
        <img src={logo} alt="logo" />
      </div>
      <div className={`${styles.adminSection} d-flex align-items-center justify-content-center gap-3`}>
        <div className={`${styles.notiSection}`}>
          <i className="fa-solid fa-bell"></i>
          <span className={`${styles.countnoti} bg-info text-white rounded-pill `}>3</span>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <span>{adminName}</span>
         <div className={`${styles.avatar}`}>
          {adminName?.slice(0,2).toUpperCase()}
         </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
