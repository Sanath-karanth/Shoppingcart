import React, { useState,Fragment,useEffect,useRef } from 'react';
import { Card, Form, Button, Container,Alert } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import anime from "animejs";
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"  
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
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setMessage("")
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password")
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
                    <h2 className="text-center mb-3 passwordreset">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className="labeltext">Email-ID:</Form.Label>
                            <Form.Control type="email" 
                                          placeholder="Enter your Email-ID" 
                                          className="placeholdertext"
                                          ref={emailRef} 
                                          required>
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit" 
                                disabled={loading} 
                                className="w-100 mt-2 mb-2 buttontext">Reset Password
                        </Button>
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