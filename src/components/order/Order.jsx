import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from"./Order.module.scss";
import FileList from '../report/fileList/FileList';


export default function Order(props) {
  const [accepted, setAccepted] = useState(true);

  const setStatus = (status) => {
    setAccepted(status);
  };

  let style1 = {};
  let style2 = {};
  if (accepted) {
    style1 = { fontWeight: "bold", color: "blue" };
    style2 = { fontWeight: "normal", color: "#a5a5a5" }
  } else {
    style1 = { fontWeight: "normal", color: "#a5a5a5" };
    style2 = { fontWeight: "bold", color: "red" }
  }
  style1.textTransform = "none";
  style2.textTransform = "none";
  return (
    <div className={styles.order}>
      <div className={styles.title}>
        ddddddddddd
      </div>
      <div className={styles.content}>
        <FileList data={props.data}/>
      </div>
      <Button size="small" onClick={() => setStatus(true)} disableRipple>
        <div style={style1}>Accept</div>
      </Button>
      <Button  size="small" onClick={() => setStatus(false)} disableRipple>
        <div style={style2}>Decline</div>
      </Button>
    </div>
  );
}
