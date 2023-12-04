import { IconButton} from "@mui/material";
import styles from "./ReportInfo.module.scss";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import FileList from "./fileList/FileList";
import UploadFiles from "./uploadFile/UploadFile";
import Order from "../order/Order";

export default function ReportInfo({ onClose }) {
  const data = [
    {
      id: 4,
      name: 'file1.txt',
      type: 'file'
    },
    {
      id: 5,
      name: 'file2.txt',
      type: 'file'
    },
    {
      id: 3,
      name: 'file3.txt',
      type: 'file'
    }
  ]
        ;
  return (
    <div className={styles.reportInfo}>
      <h2 className={styles.title}>Bao cao</h2>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <Order data ={data}/>
        </div>
        <div className={styles.frame2}>
          <div className={styles.frame21}>
            <h3>Bao cao da nop:</h3>
            <FileList data={data} download/>
          </div>
          <div className={styles.frame22}>
            <><UploadFiles /></>
          </div>
        </div>
      </div>
    </div>
  );
}
