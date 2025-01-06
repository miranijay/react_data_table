import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      width: '250px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  }

export default function Login() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'admin@example.com' && password === 'admin') {
          alert('Login successful!');
          navigate('/data-table');
        } else {
          alert('Invalid credentials');
        }
      }

    return(
        <form onSubmit={handleLogin} style={styles.form}>
            <h1>React Data Table</h1>
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
            <button type="submit" style={styles.button} >LogIn</button>
            <p>Don't have account ? <NavLink to='/signup' >SignUp</NavLink></p>
        </form>
    )
}