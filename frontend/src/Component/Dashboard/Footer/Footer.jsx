import styles from "./Footer.module.css";
import React from 'react'

 function Footer() {
  return (
   <footer className={`${styles.footer} d-flex justify-content-center align-items-center`}>
      <span>2026 Copyrights © Bunyan</span>
    </footer>
   
  );
}
export default Footer;