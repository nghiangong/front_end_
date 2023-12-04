import React, { useState } from "react";
import Textarea from '@mui/joy/Textarea';
import { Button } from "@mui/material";
import styles from "./CancelMetting.module.scss";

export default function CancelMeeting(){
    const [reason, setReason] = useState('');

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };
    const handleCancel = () => {
        // Thực hiện xử lý hủy lịch hẹn ở đây
        console.log('Đã hủy lịch hẹn với lý do:', reason);
        // Đặt lại lý do thành rỗng sau khi hủy
        setReason('');
    };
    return(
        <div className={styles.cancelMeeting}>
            <h2 className={styles.title}>Huy lich hen</h2>
            <Textarea className={styles.reason}
                placeholder="Nhap ly do"
                value={reason}
                onChange={handleReasonChange}
                minRows={7}
                maxRows={7}
            />
            <div>
                <Button className={styles.button} sx={{textTransform: 'none'}} variant="outlined"
                    onClick={handleCancel}>
                    <div>Gui</div>
                </Button>
            </div>
        </div>
    )
}