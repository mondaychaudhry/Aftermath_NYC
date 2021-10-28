import React, { useState } from "react";
import {useEffect} from 'react';
import Entry from './Entry';

function UserHome (){
    const [form, setForm] = useState ({title: "", entry: ""})
    const [entry, setEntry] = useState ([])
    const [photo, setPhoto] = useState (null)
    console.log(photo)

    function changeForm (z) {
        let y = z.target.name
        let w = z.target.value
        setForm({...form, [y]:w})}

    useEffect (() => fetch('http://127.0.0.1:3000/journals').then(x => x.json()).then(setEntry), [])
    // useEffect (() => fetch('http://127.0.0.1:3000/photos').then(x => x.json()).then((p) => {
    //     // let q = URL.createObjectURL(p)
    //     setPhoto(q)
    // }), [])
    

    function displayEntries () {
        return entry.map((x, index) => <Entry key={index} x={x} setEntry={setEntry} entry={entry}/>)}

    function addEntries (x) {
        const newEntryArray=[x, ...entry]
        setEntry(newEntryArray)}

    function handleSubmit (x) {
        x.preventDefault()
        fetch('http://127.0.0.1:3000/journals', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
            }}).then(x => x.json()).then(y => {
            addEntries(y)
            setForm({title: "", entry: "", img: photo})})}

        function fileChangedHandler (event) {
            // console.log('WORKZZZ')
            // setPhoto(event.target.files[0])
            if (event.target.files && event.target.files[0]) {
                console.log(event.target.files[0])
                console.log(URL.createObjectURL(event.target.files[0]))
            setPhoto(URL.createObjectURL(event.target.files[0]));
                }
              }

        function uploadHandler () {

        }

    return (
        
        <div >
            <h2>entries</h2>

        
            <form id='form' className='tile' onSubmit={handleSubmit} >
                <input
                type='text'
                name='title'
                className='text'
                value={form.title}
                onChange={changeForm}
                placeholder='Name of Entry'
                />
                <br></br>
                <textarea rows='10' cols='50'
                type='text'
                name='entry'
                className='text'
                value={form.entry}
                onChange={changeForm}
                placeholder='Write anything you want here. Thoughts, feelings, details, anything on your mind.'
                />
                <br></br>

                <input 
                type='file'
                onChange={fileChangedHandler} 
                />
                 <img src={photo} alt="preview image" />
                <br></br>
                 {/* <input type="file" onChange={fileChangedHandler} /> */}
                {/* <button onClick={uploadHandler}>Upload!</button>  */}

                <input 
                type='submit'
                name='submit'
                value='Record'
                className='button'
                />

            </form>

            <div>{displayEntries()}</div>
            
        </div>
    )}

export default UserHome;