import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import DataContext from 'DataContext';
import Button from '@mui/material/Button';

const groups = [
  { id: 1, name: 'Nhóm A' },
  { id: 2, name: 'Nhóm B' },
  { id: 3, name: 'Nhóm C' },
];

export default function HomePage() {
  let userContext = useContext(DataContext);

  return (
    <div className="home">
      {userContext.role === 'ROLE_MODERATOR' && (
        <NavLink to="/createGroup" end> {/* Sử dụng NavLink để chuyển hướng */}
          <Button
            className="createGroupButton"
            variant="outlined"
            sx={{ textTransform: 'none' }}
          >
            Tạo nhóm mới
          </Button>
        </NavLink>
      )}
      <h2 className="title">Danh sách các nhóm</h2>
      <div className="groupList">
        {groups.map((group, index) => (
          <NavLink to="/group" end key={index}>
            <div className="group">
              <div className="name">{group.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
