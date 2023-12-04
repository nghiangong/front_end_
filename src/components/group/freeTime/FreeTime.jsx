import React from "react";
import styles from './FreeTime.module.scss';
import { useState } from "react";

function Info(props){

    return (
        <div className={styles.info}>
            <p>7:00 -8: 00</p>
        </div>
    )
}

export default function FreeTime(props){
    const [showInfo, setShowInfo] = useState(false);
    const openInfo=() => {  setShowInfo(true); }
    const closeInfo=() => { setShowInfo(false); }
    return (
        <div className={styles.freeTime} onMouseOver={openInfo} onMouseOut={closeInfo} >
            7:00 - 8:00
               {showInfo && <Info />}
            
        </div>
    )
}