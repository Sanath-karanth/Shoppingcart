import React, { useState,Fragment,useEffect,useRef } from 'react';
import { Card, Form, Button, Container,Alert } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import anime from "animejs";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"   
import '../css/login.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexDirection:'column',
        background: "linear-gradient(to right,rgb(246, 211, 101), rgb(253, 160, 133));" 
    }
  }));

const LoginPage = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Invalid Email/Password, please try again")
        }
    
        setLoading(false)
      }

    const Welcomeanimation = () => {
        // let textWrapper = document.querySelector('.ml11 .welcometexts');
        // textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00 \x80]|\w)/g, "<span class='welcometext'>$&</span>");

        // anime.timeline({loop: true})
        // .add({
        //     targets: '.ml11 .line',
        //     scaleY: [0,1],
        //     opacity: [0.5,1],
        //     easing: "easeOutExpo",
        //     duration: 700
        // })
        // .add({
        //     targets: '.ml11 .line',
        //     translateX: [0, document.querySelector('.ml11 .welcometexts').getBoundingClientRect().width + 10],
        //     easing: "easeOutExpo",
        //     duration: 700,
        //     delay: 100
        // }).add({
        //     targets: '.ml11 .welcometext',
        //     opacity: [0,1],
        //     easing: "easeOutExpo",
        //     duration: 600,
        //     offset: '-=775',
        //     delay: (el, i) => 34 * (i+1)
        // }).add({
        //     targets: '.ml11',
        //     opacity: 0,
        //     duration: 1000,
        //     easing: "easeOutExpo",
        //     delay: 1000
        // });



        // var textWrapper = document.querySelector('.ml1 .welcometexts');
        // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='welcometext'>$&</span>");

        // anime.timeline({loop: true})
        // .add({
        //     targets: '.ml1 .welcometext',
        //     scale: [0.3,1],
        //     opacity: [0,1],
        //     translateZ: 0,
        //     easing: "easeOutExpo",
        //     duration: 600,
        //     delay: (el, i) => 70 * (i+1)
        // }).add({
        //     targets: '.ml1 .line',
        //     scaleX: [0,1],
        //     opacity: [0.5,1],
        //     easing: "easeOutExpo",
        //     duration: 700,
        //     offset: '-=875',
        //     delay: (el, i, l) => 80 * (l - i)
        // }).add({
        //     targets: '.ml1',
        //     opacity: 0,
        //     duration: 1000,
        //     easing: "easeOutExpo",
        //     delay: 1000
        // });

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
                <span className="line line2"></span>
            </span>
            </h1>
        </div>
        <div className="w-100 pb-2"  style={{maxWidth:'390px'}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-3 Loginheadtext">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="username">
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
                        <Button type="submit"
                                disabled={loading} 
                                className="w-100 mt-2 mb-2 buttontext">Login
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-2 mb-2 logintext">
                        New Account <Link to="/signup">Sign Up</Link>
                    </div>
                    <div className="w-100 text-center mt-2 mb-2 logintext">
                        <Link to="/forgot"> Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
      </Container>
    </Fragment>
  );
}
export default LoginPage;