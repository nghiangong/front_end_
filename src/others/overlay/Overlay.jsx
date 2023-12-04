import React, { useState } from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { Button, IconButton} from "@mui/material";
import styles from './Overlay.module.scss';

export default function Overlay(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <IconButton className={styles.closeButton}  onClick={props.onClose}
          variant="outlined" color="error">
          <CloseSharpIcon/>
        </IconButton>
        {props.childComponent}
      </div>
    </div>
  );
};
