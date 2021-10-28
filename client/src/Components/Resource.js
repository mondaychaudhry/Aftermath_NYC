import React, {useState} from 'react';
import { useHistory} from 'react-router-dom'

function Resource ({x, resource, setResource}) {
const [newTitle, setNewTitle] = useState ("")
const [newDescription, setNewDescription] = useState ("")
const [newContact, setNewContact] = useState ("")
const [newCategory, setNewCategory] = useState ("")
const [isOn, setIsOn] = useState (true)
const [form, setForm] = useState ({title:"", description: "", contact: "", category: ""})

function handleDelete (id){
    fetch(`http://127.0.0.1:3000/communities/${id}`, {
        method: "DELETE"}).then(x=>x.json()).then(setResource)}

 function handleUpdate (id, e) {
    e.preventDefault()
    setIsOn(!isOn)
    fetch(`http://127.0.0.1:3000/communities/${id}`, {
            method: "PATCH",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({title: newTitle, description: newDescription, contact: newContact, category: newCategory})
            })
            .then(x=>x.json()).then(setResource)}


    return(
        <div className='tile'>
            <h2>{x.title}</h2>

                <p>{x.description}</p>
                <p>Contact : {x.contact}</p>
            <h4>Category: {x.category}</h4>

            {isOn?
        <button onClick={() => {
            setNewTitle(x.title)
            setNewDescription(x.description)
            setNewContact(x.contact)
            setNewCategory(x.category)
            setIsOn(!isOn)
        }}> Edit</button> :
        <form id='form' onSubmit={(e) => handleUpdate(x.id, e)} >
                <input
                type='text'
                name='title'
                className='text'
                value={newTitle}
                onChange={(x) => setNewTitle(x.target.value)}
                placeholder='Name'
                />
                <br></br>
                <textarea rows='10' cols='50'
                type='text'
                name='description'
                className='text'
                value={newDescription}
                onChange={(x) => setNewDescription(x.target.value)}
                placeholder='Please breifly describe yourself or your organization, services offered, any requirements and best way to contact you'
                />
                <br></br>
                <input
                type='text'
                name='contact'
                className='text'
                value={newContact}
                onChange={(x) => setNewContact(x.target.value)}
                placeholder='Contact Info'
                />

                <br></br>

                <input
                type='text'
                name='category'
                className='text'
                value={newCategory}
                onChange={(x) => setNewCategory(x.target.value)}
                placeholder='Category'
                />

               <input 
                type='submit'
                name='submit'
                value='Save'
                className='button'
                />

            </form>    
        }

        <button onClick={() => handleDelete (x.id)}>Delete</button>



        </div>


    )
}

export default Resource 