import React, {useState} from 'react';
import {useEffect} from 'react';
import Resource from './Resource';

function Community (){

    const [resource, setResource] = useState ([])

    useEffect (() => fetch('http://127.0.0.1:3000/communities').then(x => x.json()).then(setResource), [])

    function displayResources () {
        return resource.map((x, index) => <Resource key={index} x={x} setResource={setResource} resource={resource}/>)}

    return (
        
        <div >
            <h3>NYC Community Resources</h3>

            <p>{displayResources()}</p>
            
        </div>
    )
}

export default Community;