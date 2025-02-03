import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../utlis/auth.jsx";

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      background: 'linear-gradient(135deg, #1a73e8, #42a5f5)',
    },
    form: {
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      padding: '30px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
      animation: 'fadeIn 0.8s ease-in-out',
    },
    title: {
      marginBottom: '20px',
      color: '#1a73e8',
      fontWeight: 600,
      fontSize: '24px',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
      outline: 'none',
      transition: 'border-color 0.3s ease',
    },
    button: {
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      backgroundColor: '#1a73e8',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    text: {
      marginTop: '15px',
      fontSize: '14px',
      color: '#555',
    },
    link: {
      color: '#1a73e8',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
}

export default function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'admin@example.com' && password === 'admin') {
          alert('Login successful!')
          login()             //admin login
          navigate('/')
        } else {
            const storedEmail = localStorage.getItem('userEmail')
            const storedPassword = localStorage.getItem('userPassword')
        
            if (storedEmail === email && storedPassword === password) {
                login()         // Regular user login
                navigate('/')
            } else {
                alert('Invalid credentials')
            }
        }
      }

    return(
        <div style={styles.container}>
            <form onSubmit={handleLogin} style={styles.form}>
                <h1> React Data Table </h1>
                <h2>Login</h2>
                <input
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    style={styles.input}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button} > LogIn </button>
                <p>Don't have account ? <NavLink to='/signup' style={{color:"blue"}} > SignUp </NavLink></p>
            </form>
        </div>
    )
}
