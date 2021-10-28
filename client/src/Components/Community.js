import React, {useState} from 'react';
import {useEffect} from 'react';
import Resource from './Resource';

function Community (){
const [resource, setResource] = useState ([])
const [isOn, setIsOn] = useState (false)
const [filterResources, setFilterResources] =  useState ("")
// console.log(filterResources)
const [form, setForm] = useState ({title: "", description: "", contact: "", category: ""})

    function changeForm (z) {
    let y = z.target.name
    let w = z.target.value
    setForm({...form, [y]:w})}   

    function addResources (x) {
    const newResourceArray=[x, ...resource]
    setResource(newResourceArray)}

    function handleSubmit (x) {
    x.preventDefault()
    fetch('http://127.0.0.1:3000/communities', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
            "Accepts": "application/json",
            "Content-Type": "application/json",
        }}).then(x => x.json()).then(y => {
        addResources(y)
        setForm({title: "", description: "", contact: "", category: ""})})}
        
        useEffect (() => fetch('http://127.0.0.1:3000/communities').then(x => x.json()).then(setResource), [])
    function displayResources () {
        let resourcesArray = resource
        if (filterResources != '') {
            resourcesArray = resource.filter(y => y.category == filterResources)
        }
        return resourcesArray.map((x, index) => { 
             return(
        <Resource key={index} x={x} setResource={setResource} resource={resource}/>)})}
 
    
    return (
            <div >
            <h3>community resources</h3>
            <button onClick={() => {
                setIsOn(true)
                }}>{isOn? <form id='form' onSubmit={handleSubmit} >
                <input
                type='text'
                name='title'
                className='text'
                value={form.title}
                onChange={changeForm}
                placeholder='Name'
                />
                <br></br>
                <textarea rows='10' cols='50'
                type='text'
                name='description'
                className='text'
                value={form.description}
                onChange={changeForm}
                placeholder='Please briefly describe yourself or your organization, services offered, any requirements and best way to contact you'
                />
                <br></br>
                <input
                type='text'
                name='contact'
                className='text'
                value={form.contact}
                onChange={changeForm}
                placeholder='Contact Info'
                />

                <br></br>

                <input
                type='text'
                name='category'
                className='text'
                value={form.category}
                onChange={changeForm}
                placeholder='Category'
                />

               <input 
                type='submit'
                name='submit'
                value='Submit'
                className='button'
                />

            </form> :
            'Add New'}</button>
            <br></br>
            <br></br>
             <select onChange={(se) => setFilterResources(se.target.value)}> 
                <option value=''>all</option>
                <option value='Home Services'>Home Services</option>
                <option value='Transportation Services'>Transportation</option>
                <option value='Emergency Housing'>Housing</option>
                <option value='Translation Services'>Translation</option>
                <option value='Mental Health'>Mental Health</option>
                <option value='Career Services'>Career Services</option>
                <option vlaue='Legal'>Legal</option>
            </select>
           
            <p>{displayResources()}</p>
            
        </div>
    )
}

export default Community;