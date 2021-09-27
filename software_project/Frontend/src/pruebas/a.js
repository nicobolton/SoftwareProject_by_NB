import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Login(){
    const[emailuser, setEmail] = useState("");
    const[password, setPass] = useState("");
    const[loading, setLoading] = useState(false);

    function validateForm() {
        return emailuser.length > 0 && password.length > 0;
      }
    
      async function singIn(){
        if(!loading){
          setLoading(true);
          fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailuser,
              pass: password
            }),
          })
            .then((response) => response.json())
            .then(async (json) => {
              if(json.status){
                localStorage.setItem('token', json.token);
                setLoading(false);
                window.location.href = "/";
              } else{
                alert("fallo el inicio de sesion")
              }
            })
            .catch((error) => {
              console.error(error);
            });
          setLoading(false);
        }
      }
    
      function handleSubmit(event) {
        singIn();
        event.preventDefault();
      }
    
    return (
        <div className="Login">
        <form onSubmit={handleSubmit}>
        <TextField
            value={emailuser}
            onChange={(e) => setEmail(e.target.value)}
            controlId="username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"

            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPass(e.target.value)}
            controlId="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!validateForm()}
          > Ingresar </Button>
        </form>
        </div>
    );


}