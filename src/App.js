import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route} from "react-router-dom";
import Register from './components/Register';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/Register">
      <Register/>
    </Route>
    </>
  );
}

export default App;
