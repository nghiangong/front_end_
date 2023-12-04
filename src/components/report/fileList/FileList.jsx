import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import { IconButton, styled } from '@mui/material';
import styles from './FileList.module.scss';

const CustomIconButton = styled(IconButton)`padding: 0;color: #54952d;`;

export default function ListFile(props) {
    const renderTreeNode = (file, index) => {
      return (
        <ListItem key={index} className={styles.fileListItem}> 
          <InsertDriveFileOutlinedIcon/>
          <div className={styles.name}> {file.name}</div>
          { props.download && 
            <CustomIconButton className={styles.downloadIcon}  size="small">
              <FileDownloadOutlinedIcon />
            </CustomIconButton>
          }
          { props.erase && 
            <CustomIconButton className={styles.closeIcon}  
             onClick={()=>props.onErase(file)}
             >
              <HighlightOffSharpIcon />
            </CustomIconButton> 
          }
        </ListItem>
      )
    };
    return (
      <div className={styles.fileList}>
          {props.data.map((file, index) => renderTreeNode(file, index))}
      </div>
    )
}