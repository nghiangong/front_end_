import React, { useState } from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Button from "@mui/material/Button";

import "./CreateGroup.css";

const searchData = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "nghia.nm204768@sis.hust.edu.vn",
];

export default function CreateGroup() {
  const [groupTopic, setGroupTopic] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = searchData.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleAddMember = (member) => {
    if (!selectedMembers.includes(member)) {
      setSelectedMembers((prevMembers) => [...prevMembers, member]);
    }
  };

  const handleRemoveMember = (member) => {
    setSelectedMembers((prevMembers) =>
      prevMembers.filter((prevMember) => prevMember !== member)
    );
  };

  const handleCreate = () => {
    // Bạn có thể thực hiện các hành động với dữ liệu đã thu thập ở đây, ví dụ như gửi nó lên máy chủ.
    const groupData = {
      topic: groupTopic,
      members: selectedMembers,
    };
    console.log("Dữ liệu Nhóm:", groupData);
    // Đặt lại trường nhập sau khi gửi dữ liệu
    setGroupTopic("");
    setSelectedMembers([]);
  };

  const handleCancel = () => {
    setGroupTopic("");
    setSelectedMembers([]);
  };

  return (
    <div className="createGroup">
      <h2 className="title">Tạo nhóm mới</h2>
      <p>Đề tài:</p>
      <TextField
        className="topic"
        multiline
        rows={2}
        fullWidth
        size="small"
        value={groupTopic}
        onChange={(e) => setGroupTopic(e.target.value)}
      />
      <div className="addMember">
        <div className="members">
          <p>Thành viên:</p>
          <List className="memberList">
            {selectedMembers.map((member, index) => (
              <ListItem key={index} className="member">
                <FiberManualRecordIcon
                  sx={{ fontSize: 15, paddingRight: "5px" }}
                />
                <ListItemText primary={member} />
                <IconButton onClick={() => handleRemoveMember(member)}>
                  <HighlightOffIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="search">
          <TextField
            value={searchTerm}
            onChange={handleSearch}
            fullWidth
            size="small"
            InputProps={{
              sx: {
                backgroundColor: "white", // Đặt màu nền trắng
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <List className="listResult">
            {searchResults.map((result, index) => (
              <ListItem key={index} className="result">
                <ListItemText primary={result} />
                <IconButton onClick={() => handleAddMember(result)}>
                  <AddIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <Button variant="contained" onClick={handleCreate}>
        Tạo
      </Button>
      <Button
        variant="outlined"
        onClick={handleCancel}
        sx={{ marginLeft: "10px" }}
      >
        Hủy
      </Button>
    </div>
  );
}
