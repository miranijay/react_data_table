import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { isAuthenticated, logout } from "../utlis/auth";

const styles = {
    navbar: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      backgroundColor: '#6495ED',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 0.5s ease-in-out',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      margin: 0,
      padding: 0,
    },
    navItem: {
      position: 'relative',
    },
    link: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: 500,
      padding: '8px 12px',
      borderRadius: '4px',
      transition: 'all 0.3s ease',
    }
}

export default function Navbar() {

    const location = useLocation();

    // Pages where the Navbar should not be visible
    const noNavbarRoutes = ['/login', '/signup'];
  
    if (noNavbarRoutes.includes(location.pathname)) {
      return null; // Hide Navbar
    }

    return(
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}><NavLink to="/" style={styles.link}>Home</NavLink></li>
                {isAuthenticated() && <li style={styles.navItem}><NavLink to="/data-table" style={styles.link}>Data Table</NavLink></li>}
                {isAuthenticated() ? (
                    <li style={styles.navItem}>
                        <NavLink 
                            to="/login" 
                            onClick={() => {
                                logout()
                                window.location.reload()
                             }}
                            style={styles.link}>
                                Logout
                        </NavLink>
                    </li>
                ) : (
                    <>
                        <li style={styles.navItem}><NavLink to="/login" style={styles.link}>Login</NavLink></li>
                        <li style={styles.navItem}><NavLink to="/signup" style={styles.link}>Signup</NavLink></li>
                    </>
                )}
            </ul>
        </nav>
    )
}