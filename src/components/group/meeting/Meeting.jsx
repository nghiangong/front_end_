import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import ReportInfo from "../../report/ReportInfo";
import "./Meeting.css";

function Meeting() {
  const [comment, setComment] = useState("Da hoan thien duoc giao dien, database co ban");
  const [request, setRequest] = useState("Can hoan thien tat ca giao dien, ve use-case");

  return (
    <div className="meeting">
      <h2 className="title">cuoc hop ngay</h2>
      <div className="comment">
        <p>Nhan xet:</p>
        <TextField
          variant="outlined"
          value={comment}
          fullWidth
          multiline
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <div className="request">
        <p>Yeu cau:</p>
        <TextField
          variant="outlined"
          value={request}
          fullWidth
          multiline
          onChange={(event) => setRequest(event.target.value)}
        />
      </div>
      <div className="report">
        <p>Bao cao:</p>
        <div>File bao cao</div>
        <Button className="reportButton" variant="contained" size="small">
          Nop bao cao
        </Button>
      </div>
    </div>
  );
}

export default Meeting;
