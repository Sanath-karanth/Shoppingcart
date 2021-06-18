import React, { useState,Fragment,useEffect } from 'react';
import { Card, Form, Container,Navbar,Alert } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import anime from "animejs";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"; 
import '../css/dashboard.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        background: "linear-gradient(to right,rgb(246, 211, 101), rgb(253, 160, 133));" 
    }
  }));

const Dashboard = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const items = [0, 1, 2];
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }
    

    useEffect(() => {
        
    }, [])

  return (
    <Fragment>
      <div className="rootstyle" >
            <Navbar bg="light">
              <Navbar.Brand href="#home">K-Mart
              </Navbar.Brand>
                <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Button variant="outlined"
                            color="primary"
                            endIcon={<PowerSettingsNewIcon />} 
                            onClick={handleLogout}>
                      LOGOUT
                    </Button>
                    </Navbar.Text>
              </Navbar.Collapse>
          </Navbar>
          <div>
            <h2 className="text-center">Welcome to Dashboard</h2>
           
          </div>
        
      </div>
    </Fragment>
  );
}
export default Dashboard;