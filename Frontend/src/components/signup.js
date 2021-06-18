import React, { useState,Fragment,useEffect,useRef } from 'react';
import { Card, Form, Button, Container,Alert } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import anime from "animejs";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"  
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
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

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
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className="labeltext">Email-ID:</Form.Label>
                            <Form.Control type="email" 
                                          placeholder="Enter your Email-ID" 
                                          className="placeholdertext"
                                          ref={emailRef} 
                                          required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className="labeltext">Password:</Form.Label>
                            <Form.Control type="password" 
                                          placeholder="Enter your password" 
                                          className="placeholdertext" 
                                          ref={passwordRef}
                                          required></Form.Control>
                        </Form.Group>
                        <Form.Group id="confirmpassword">
                            <Form.Label className="labeltext">Confirm password:</Form.Label>
                            <Form.Control type="password" 
                                          placeholder="Re-enter your password" 
                                          className="placeholdertext"
                                          ref={passwordConfirmRef} 
                                          required></Form.Control>
                        </Form.Group>
                        <Button type="submit" 
                                disabled={loading} 
                                className="w-100 mt-2 mb-2 buttontext">Sign Up
                        </Button>
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