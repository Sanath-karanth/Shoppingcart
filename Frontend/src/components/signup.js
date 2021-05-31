import React, { useState,Fragment,useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, Form, Button, Container } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import anime from "animejs";  
import '../css/signup.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        background: "linear-gradient(to right,rgb(246, 211, 101), rgb(253, 160, 133));" 
    }
  }));

const SignupPage = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const Welcomeanimation = () => {
        var textWrapper = document.querySelector('.wtext');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.wtext .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: '.wtext .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 30 * i
        });
    }

    useEffect(() => {
        Welcomeanimation();
    }, [])

  return (
    <Fragment>
      <Container fluid 
            className={`align-items-center justify-content-center ${classes.root}`}
            style={{minHeight:"100vh"}}>
        <div>
            <h1 className="ml11 pb-3">
            <span className="text-wrapper">
                <span className="line line1"></span>
                    <span className="wtext">Welcome to K-Mart</span>
                <span class="line line2"></span>
            </span>
            </h1>
        </div>
        <div className="w-100 pb-2"  style={{maxWidth:'390px'}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-3 signuptext">Sign Up</h2>
                    <Form>
                        <Form.Group id="username">
                            <Form.Label className="labeltext">Username:</Form.Label>
                            <Form.Control type="text" required></Form.Control>
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label className="labeltext">Email:</Form.Label>
                            <Form.Control type="email" required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className="labeltext">Password:</Form.Label>
                            <Form.Control type="password" required></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-2 mb-2 buttontext">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2 mb-2 logintext">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </Card.Body>
            </Card>
           
        </div>
      </Container>
    </Fragment>
  );
}
export default SignupPage;