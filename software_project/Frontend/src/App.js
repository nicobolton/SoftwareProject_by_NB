import './App.css';
//import Productos from './components/Product';
import Navbar from './components/Navbar';
import Navbar_usr from './components/Navbar_usr';
import Products from './components/Products';
import SignIn from './components/Signin';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Profile from './components/User';
import Categorias from './components/categorias';
import CambiarDatos from './components/ChangeUserData';
import Historial from './components/historial';
import CambiarPassword from './components/ChangePassword';
//import Search from './pruebas/test';
//import Usuario from './pruebas/c';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/categorias">
            <Categorias />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/user">
            <Navbar_usr />
            <Products />
          </Route>
          <Route path="/perfil">
            <Navbar_usr />
            <Profile />
          </Route>

          {/* <Route path="/historial">
            <Navbar_usr />
            <Historial />
          </Route> */}

          <Route path="/editarUsuario">
            <Navbar_usr />
            <CambiarDatos />
          </Route>

          <Route path="/changePassword">
            <Navbar_usr />
            <CambiarPassword />
          </Route>

          <Route path="/signin">
            <SignIn />
          </Route>

          {/* <Route path="/testing">
            <Usuario/>
          </Route> */}


          <Route path="/">
            <Products />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;