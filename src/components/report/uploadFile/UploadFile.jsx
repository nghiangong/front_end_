import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import styles from'./UploadFile.module.scss';
import ListFile from '../fileList/FileList';

export default function UploadFiles() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Xử lý các tệp đã được tải lên ở đây
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };
  const removeFile = (file) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
    console.log("0=", file);
  };

  return (
    <>
      <div className={styles.uploadZone}>
        <input type="file" ref={fileInputRef} style={{ display: 'none' }} 
          onChange={handleFileUpload} multiple 
          />
        <div className={styles.title}>
          <h3>Nop bao cao: </h3>
          {uploadedFiles.length > 0 && (
            <Button className={styles.submitButton}
              variant="contained" size="small">
              Nop
            </Button>
          )}
        </div>
        <div className={styles.fileZone}>
          <ListFile data ={uploadedFiles} erase onErase={removeFile}/>
        </div>
        <div>
          <Button onClick={() => fileInputRef.current.click()}
            className={styles.uploadButton}
            variant="contained" size="small">
            Upload
          </Button>
        </div>
      </div>
    </>
  );
};
