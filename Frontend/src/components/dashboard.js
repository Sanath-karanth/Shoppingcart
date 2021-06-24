import React, { useState,Fragment,useEffect } from 'react';
import { Card, Form, Container,Navbar,Alert,Row,Col,Button } from 'react-bootstrap';
import { makeStyles, StylesProvider, useTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import anime from "animejs";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"; 
import '../css/dashboard.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        // flexDirection:'column',
        backgroundColor:'#ebebeb',
        // background: "linear-gradient(to right,rgb(246, 211, 101), rgb(253, 160, 133));" 
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
            <Navbar sticky="top" className={classes.root}>
              <Navbar.Brand href="#home">K-Mart
              </Navbar.Brand>
                <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Button variant="outline-info"
                            // style={{color:"black"}} 
                            onClick={handleLogout}>
                      LOGOUT
                      <PowerSettingsNewIcon fontSize="small" style={{marginBottom:'3px',marginLeft:'4px'}} />
                    </Button>
                    </Navbar.Text>
              </Navbar.Collapse>
          </Navbar>
         
          <Container className="pt-4">
            <Row className="p-4">
              <Col>
              <Card>
                  <Card.Header>Card 1</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="outline-info">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="p-4">
              <Col>
              <Card>
                  <Card.Header>Card 2</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="outline-info">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="p-4">
              <Col>
              <Card>
                  <Card.Header>Card 3</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="outline-info">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        
      </div>
    </Fragment>
  );
}
export default Dashboard;