import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {

    return(
        <div>
            <Navbar />
            <main>
                <Outlet />                          
            </main>
        </div>
    )
}