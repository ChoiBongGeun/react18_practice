import React from "react"
import {BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Auth from "../Page/Auth";
import LoginPage from "../Page/LoginPage";
import Profile from "../Page/Profile";
import TestPage from "../Page/testPage"


const index = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                {/*<Route path="*" element={<Navigate to="/" replace />}/>*/}
                <Route path="oauth/callback" element={<Auth />} />
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default index;