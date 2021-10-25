import React, {useState} from 'react';
import { useHistory} from 'react-router-dom'

function Resource ({x, resource, setResource}) {


    return(
        <>
            <h2>{x.title}</h2>

                <p>{x.description}</p>
                <p>{x.contact}</p>
            <h4>{x.category}</h4>
        </>


    )
}

export default Resource 