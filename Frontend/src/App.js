import logo from './logo.svg';
import './App.css';
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignupPage from './components/signup';
import LoginPage from './components/login';
import ForgotPage from './components/forgotpassword';
import DashboardPage from './components/dashboard';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <Router>
         <AuthProvider>
            <Switch>
                  <PrivateRoute exact path="/" component={DashboardPage}></PrivateRoute>
                  <Route  path="/login" component={LoginPage}></Route>
                  <Route  path="/forgot" component={ForgotPage}></Route>
                  <Route  path="/signup" component={SignupPage}></Route>
            </Switch>
         </AuthProvider>
      </Router>
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
