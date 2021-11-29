import React from 'react';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';


const Profile = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            fetch('http://localhost:4000/api/clientes', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_usuario: localStorage.getItem("token")
                }),
            })
                .then((response) => response.json())
                .then(data => {
                    console.log(data);
                    setdata(data);
                });
        };
        getUsers().catch(null);
    }, []);

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-aroud",
                marging: "18px 0px",
                BorderBottom: "1px solid grey"
            }}>
                <div>
                    <img style={{ widht: "160px", heigh: "160px", borderRadius: "80px" }} alt="Persona"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h2>{data.map(data => <div>{data.usuario}</div>)}
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <label>{data.map(data => <div>{data.telefono}</div>)}  </label>
                    </div>
                    </h2>
                    <div >
                        <Button varian="outlined" href="/editarUsuario">
                            <strong>Actualizar datos de usuario</strong>
                        </Button>
                        <Button varian="outlined" href="/changePassword">
                            <strong>Cambiar contraseña</strong>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
