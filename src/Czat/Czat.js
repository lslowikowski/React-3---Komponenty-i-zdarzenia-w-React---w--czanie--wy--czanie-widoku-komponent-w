import React from 'react';

const czat = (props) =>{
    return(
        <div>
            <h2>{props.nazwa}</h2>
            <p>{props.opis}</p>
        </div>
    );
}

export default czat;