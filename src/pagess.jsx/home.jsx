import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utlis/auth";

const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
}

export default function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/data-table');
        } 
        else {
            navigate('/signup');
        }
    }, [navigate])

    return(
        <div style={styles.container}>
            <div>Redirecting...</div>
        </div>
    )
}