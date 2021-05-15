import React, { useState,Fragment,useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, Form, Button, Container } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import anime from "animejs";  
import '../css/forgot.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        background: "linear-gradient(to right,rgb(246, 211, 101), rgb(253, 160, 133));" 
    }
  }));

const ForgotPage = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const Welcomeanimation = () => {
        let textWrapper = document.querySelector('.ml11 .welcometexts');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00 \x80]|\w)/g, "<span class='welcometext'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, document.querySelector('.ml11 .welcometexts').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.ml11 .welcometext',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
        }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
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
                <span className="welcometexts">Welcome to K-Mart</span>
            </span>
            </h1>
        </div>
        <div className="w-100 pb-2"  style={{maxWidth:'390px'}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-3 passwordreset">Password Reset</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label className="labeltext">Email:</Form.Label>
                            <Form.Control type="email" required></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-2 mb-2 buttontext">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-2 mb-2 logintext">
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="w-100 text-center mt-2 mb-2 logintext">
                        New Account <Link to="/">Sign Up</Link>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
      </Container>
    </Fragment>
  );
}
export default ForgotPage;