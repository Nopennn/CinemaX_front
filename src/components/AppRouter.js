import React from 'react';
import {Routes, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../Routes";
import Catalog from "../pages/Catalog";
import Auth from "../pages/Auth";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import FilmPage from "../pages/FilmPage";

function AppRouter() {
    const isAuth = true
    return (
        <Routes>
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/" element={<Catalog/>}/>
            <Route path="/login" element={<Auth/>}/>
            <Route path="/registration" element={<Auth/>}/>
            <Route path="/user" element={<UserPage/>}/>
            <Route path="/film" element={<FilmPage/>}/>

        </Routes>
    );
};

export default AppRouter;