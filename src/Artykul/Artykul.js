import React from 'react';

const artykul = (props) =>{
    return(
        <div>
            <h2>{props.tytul}</h2>
            <p>{props.tresc}</p>
        </div>
    );
}

export default artykul;