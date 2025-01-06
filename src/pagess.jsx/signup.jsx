import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full screen height
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

export default function Signup() {

    const [formdata, setformdata] = useState({email:'', password:''})
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        localStorage.setItem('userEmail', formdata.email);
        localStorage.setItem('userPassword', formdata.password);
        alert(`signup successful! Email: ${formdata.email}`)
        navigate('/login')
    }

    return(
        <div style={styles.container}>
            <form onSubmit={handleSignup} style={styles.form}>
                <h2>signup</h2>
                <input 
                    type="email"
                    placeholder="Email"
                    value={formdata.email}
                    onChange={(e) => setformdata({...formdata, email: e.target.value})}
                    style={styles.input}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={formdata.password}
                    onChange={(e) => setformdata({...formdata, password: e.target.value})}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Signup</button>
            </form>
        </div>
    )
}