import React, { useState,useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Champions() {



    const [data, setdata] = useState([]);

    useEffect(() => {
        const getChamps = async () => {
            fetch("http://localhost:3000/home")
                .then(response => response.json())
                .then(value => {
                    setdata(value);
                    console.log(data)
                    
                });
        };
        getChamps().catch(null);
    }, []);

    function xd(id){
        localStorage.setItem('idchamp',id.target.getAttribute('value'))
        window.location.href="/commit"
    }
    
    return(
        <div Style='background-color: black;
        margin-left: auto;
        margin-right: auto;
        display: table;'>
        <div className='row'>
        {data.map(data => (
            <div className='col-2 mb-2' key={data.id_champ}>
            <Card Style='width: 14rem'>
                <Card.Img variant="top" src={"../../iconos/"+data.id_champ+".jpg"}/>
                <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.title}
                </Card.Text>
                <Button key={data.id_champ} value={data.id_champ} onClick={xd}>Commit</Button>
                </Card.Body>
            </Card>
            </div>
        ))}</div></div>
        
    );
}