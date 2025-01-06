import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utlis/auth";
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ textAlign: 'center', marginTop: '50px' }}
        >
            <h1>Welcome to the App</h1>
            <p>Redirecting...</p>
        </motion.div>
    )
}