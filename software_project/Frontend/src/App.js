import React from 'react'
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
import AddProducto from './components/addProducto';
import Navbar_admin from './components/Navbar_admin';
import DelProducto from './components/delProducto';
import Stock from './components/Stock';
import Nosotros from './components/aboutus';
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
          <Route path="/clientes">
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

          <Route path="/admin">
            <Navbar_admin />
          </Route>

          <Route path="/addproducto">
            <Navbar_admin />
            <AddProducto />
          </Route>

          <Route path="/DelProducto">
            <Navbar_admin />
            <DelProducto />
          </Route>

          {<Route path="/stock">
            <Navbar_admin />
            <Stock />
          </Route>}

          <Route path="/nosotros">
            <Navbar_usr />
            <Nosotros />
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