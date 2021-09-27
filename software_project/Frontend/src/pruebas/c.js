import React, { useState, useEffect } from 'react';


export default function Usuario(){
    const [data, setdata] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            fetch("http://localhost:4000/api/clientes")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setdata(data);
            });
        };
        getUsers().catch(null);
    }, []);
}