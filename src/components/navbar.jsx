import React from "react";
import { Link, NavLink } from "react-router-dom";

const styles = {
    navbar: {
      backgroundColor: '#333',
      padding: '10px',
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'space-around',
      margin: 0,
      padding: 0,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
    },
  }

export default function Navbar() {

    if (window.location.pathname === '/login' || window.location.pathname === '/signup') {
        return null // Don't show navbar on login/signup pages
    }

    return(
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li><NavLink to="/" style={styles.link}>Home</NavLink></li>
                <li><NavLink to="/data-table" style={styles.link}>Data Table</NavLink></li>
                {isAuthenticated() ? (
                    <li><Link to="/login" onClick={() => { localStorage.removeItem('isAuthenticated'); }} style={styles.link}>Logout</Link></li>
                ) : (
                    <>
                        <li><NavLink to="/login" style={styles.link}>Login</NavLink></li>
                        <li><NavLink to="/signup" style={styles.link}>Signup</NavLink></li>
                    </>
                )}
            </ul>
        </nav>
    )
}