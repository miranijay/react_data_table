import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utlis/auth.jsx";

export default function ProtectedRoute({children}) {

    if (!isAuthenticated()) {
        return <Navigate to="/login" />
    }
    
    return children
}