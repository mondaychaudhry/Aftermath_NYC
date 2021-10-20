import React from "react";

function Resource ({x}) {

    return (
        <div>
               <h3>Title: {x.title}</h3>
               <p>Description: {x.description}</p>
               <p>Contact: {x.contact}</p>
               <p>Category: {x.category}</p>
               <br></br>
              
               <button>Edit</button>
               <button>Delete</button>
        </div>

    )
}

export default Resource