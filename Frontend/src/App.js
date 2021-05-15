import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './components/signup';
import LoginPage from './components/login';
import ForgotPage from './components/forgotpassword';

function App() {
  return (
    <Switch>
      <Route exact path="/">
            <SignupPage />
      </Route>
      <Route exact path="/login">
            <LoginPage />
      </Route>
      <Route exact path="/forgot">
            <ForgotPage />
      </Route>
      </Switch>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
