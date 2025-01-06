import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      backgroundColor: '#28A745',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
    },
  }

export default function Signup() {

    const [formdata, setformdata] = useState({email:'', password:''})
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        alert(`signup successful! Email: ${formdata.email}`)
        navigate('/login')
        setformdata({email:'', password:''})
    }

    return(
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
    )
}