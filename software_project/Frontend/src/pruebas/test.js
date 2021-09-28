import { useEffect, useState } from 'react';


export default function Search() {
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

    return (
        <div>{data.map(data => <div>{data.usuario}</div>)}</div>
      )
}

//esto serviria para el historial
