import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useNavigate } from 'react-router-dom';

import "./Meetings.css";

const columns = [
  { id: 'name', label: 'Tên', minWidth: 170 },
  { id: 'date', label: 'Ngày', minWidth: 100 },
  {
    id: 'time',
    label: 'Thời gian',
    minWidth: 50,
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'address',
    label: 'Địa chỉ',
    minWidth: 50,
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Tình trạng',
    minWidth: 50,
    // format: (value) => value.toFixed(2),
  },
];

function createData(name, date, time, address, status) {
  return { name, date, time, address, status };
}

const rows = [
  createData('Cuộc họp 1', '17/08/2020', "17:00 - 19:00", "B1-203", "Chưa diễn ra"),
  createData('Cuộc họp 2', '16/08/2020', "17:00 - 19:00", "B1-202", "Chưa diễn ra"),
];

export default function Meetings() {

  const navigate = useNavigate();

  return (
    <Paper sx={{ width: '80%', margin: '10px auto auto', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:"#4fb9c5", color:"white",fontWeight:"bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{cursor: 'pointer'}} onClick={()=>navigate('/meeting')}>
                    {console.log(row)}
                    {console.log(index)}
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
