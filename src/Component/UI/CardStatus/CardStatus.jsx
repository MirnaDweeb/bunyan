import React from 'react'
import styles from "../../UI/CardStatus/CardStatus.module.css" 
export default function CardStatus({counter,title}) {
  return (
   <>
 
          <div className= {`${styles.cardstatus} d-flex align-items-center`}>
            <div className={`${styles.icon} w-100 d-flex justify-content-center align-items-center  `}>
              <i class="fa-solid fa-building"></i>
            </div>
            <div className={`${styles.info} d-flex w-100 flex-column align-items-center gap-2`} >
              <span className={`${styles.counter}`}>{counter}</span>
              <span className={`${styles.title}`}>{title}</span>
            </div>
          </div>
        

        </>
  )
}
