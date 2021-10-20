import React, {useState} from "react";
import { useEffect } from "react";
import Resource from "./Resource";

function Community () {
    const [resource, setResource] = useState ([])
    
    useEffect(() => fetch('http://127.0.0.1:3000/communities').then(x => x.json()).then(setResource), [])
    
    function displayResources () {
        return resource.map((x) => <Resource key={x.id} x={x} />)}

    return (
        
        <div >
            <h2>NYC Community Resources</h2>
            <div>{displayResources()}</div>
        </div>
    )
}

export default Community;