import React, { useState } from "react";

import "./TimeTable.css";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const data = [
  {
    date: "14/08/2023",
    meetings: [
      {
        time: "14:00 - 17:00",
        group: "nhóm 1",
      },
      {
        time: "14:00 - 17:00",
        group: "nhóm 2",
      },
    ],
    freeTimes: [
      {
        time: "15:00 - 17:00",
        groups: [
          {
            group: "nhóm 1",
            time: "16:00 - 17:00",
          },
          {
            group: "nhóm 2",
            time: "18:00 - 19:00",
          },
        ],
      },
    ],
  },
];
const meetings = (item) => {
  return (
    <>
      <tr>
        <td className="td collapse">Thời gian</td>
        <td className="td collapse">Nhóm</td>
      </tr>
      {Array.isArray(item) &&
        item.map((item1) => {
          return (
            <tr>
              <td className="td collapse">{item1.time}</td>
              <td className="td collapse">{item1.group}</td>
            </tr>
          );
        })}
    </>
  );
};
const freetimes = (item) => {
  return (
    <>
      <tr>
        <td></td>
        <td className="td collapse">Tên nhóm</td>
        <td className="td collapse">Thời gian đăng ký</td>
        <td className="td collapse">Đồng ý</td>
        <td className="td collapse">Hủy</td>
      </tr>
      <tr>
        <td className="td collapse tFreeTime" rowspan="3">
          16:00-17;00
        </td>
        <td className="td collapse">nhoms 1</td>
        <td className="td collapse">16:00 - 17:00</td>
        <td className="td collapse">
          <CheckCircleOutlineIcon />
        </td>
        <td className="td collapse">
          <HighlightOffIcon />
        </td>
      </tr>
      <tr>
        <td className="td collapse">Nhóm 2</td>
        <td className="td collapse">18:00 - 19:00</td>
      </tr>
      <tr>
        <td></td>
      </tr>
    </>
  );
};
const activity = (item) => {
  return (
    <>
      <tr>
        <td className="date" colSpan={4}>
          Ngày{" " + item.date}
        </td>
      </tr>
      <tr>
        <td align="top" className="meeting">
          {meetings(item.meetings)}
        </td>
        <td align="top" className="freeTime">
          {freetimes(item.freeTimes)}
        </td>
      </tr>
    </>
  );
};

export default function TimeTable() {
  return (
    <div className="timeTable">
      <table className="table">
        <thead className="thead">
          <tr>
            <th className="th">
              <h2>Lịch họp</h2>
            </th>
            <th className="th">
              <h2>Lịch rảnh</h2>
            </th>
          </tr>
        </thead>
        <tbody className="tbody">{data.map((item) => activity(item))}</tbody>
      </table>
    </div>
  );
}
