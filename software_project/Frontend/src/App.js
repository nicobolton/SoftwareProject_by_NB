import './App.css';
//import Productos from './components/Product';
import Navbar from './components/Navbar';
import Navbar_usr from './components/Navbar_usr';
import Products from './components/Products';
import SignIn from './components/Signin';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/Signup';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/">
            <Products />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;