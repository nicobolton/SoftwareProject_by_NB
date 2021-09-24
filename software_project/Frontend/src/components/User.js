import { BorderBottom } from '@material-ui/icons';
import React from 'react';


  const Profile = () =>{
    return(
        <div>
            <div style={{
                display:"flex",
                justifyContent:"space-aroud",
                marging:"18px 0px",
                BorderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{widht:"160px",heigh:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h2>Juan Perez</h2>
                    <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                        <label>Cumpleaños: 21/04/1994</label>
                        <label>Telefono: +56 9 77213412</label>
                        <button> </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Profile