import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.scss";

import DataContext from './DataContext';
import Header from "./components/header/Header";
import Register from "./components/login+register/Register";
import Login from "./components/login+register/Login";
import HomePage from "./pages/home/Home";
import CreateGroup from "components/form/createGroup/CreateGroup";
import TimeTable from "pages/timeTable/TimeTable";
import Meetings from "pages/meetings/Meetings";
import Group from "pages/group/Group";

export default function App() {
    const [role, setRole] = useState('');
    const updateRole = role => {
        setRole(role);
    }
    return (
        <div className="App">
            <DataContext.Provider value={{role, updateRole}}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/home" element={<HomePage />} />
                    <Route exact path="/group" element={<Group />} >
                        <Route exact path="meetings" element={<Meetings />} />
                        <Route exact path="" element={<Navigate to="meetings" />} />
                    </Route>
                    <Route exact path="/createGroup" element={<CreateGroup />} />

                    <Route exact path="/timeTable" element={<TimeTable />} />
                </Routes>
            </DataContext.Provider>
        </div>
    );
}