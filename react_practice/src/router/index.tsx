import React from "react"
import {BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import LoginPage from "../Page/LoginPage";
import TestPage from "../Page/testPage"


const index = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default index;