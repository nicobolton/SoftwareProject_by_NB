import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Register(){

  const [username, setUsername] = useState("");
  const [emailuser, setEmailuser] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  function validateForm() {
    return username.length > 0 && emailuser.length > 0 && password.length > 0 && phone.length > 0;
  }

  async function singUp(){
    if(!loading){
      setLoading(true);
      fetch('http://localhost:4000/api/registro', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: username,
            email: emailuser,
            pass: password,
            tel: phone
        }),
      })
        .then((response) => response.json())
        .then(async (json) => {
          if(json.status){
            alert("Registrado con exito!");
          } else{
            alert("Registrado");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    singUp()
    event.preventDefault();
  }

  return(
        <div className="Registro">
        <form onSubmit={handleSubmit}>
        <TextField
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="Nombre y Apellido"
            autoFocus
        />
        <TextField
                value={emailuser}
                onChange={e => setEmailuser(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
        />
        <TextField
                value={password}
                onChange={e => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
        />
        <TextField
                value={phone}
                onChange={e => setPhone(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="telefono"
                label="Telefono"
                id="phone"
        />
        <Button
            disabled={!validateForm()}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          />
        </form>

        </div>
  )
}