import React, { useState } from "react";
import {useEffect} from 'react';
import Entry from './Entry';

function UserHome (){
    const [form, setForm] = useState ({title: "", entry: ""})
    const [entry, setEntry] = useState ([])

    function changeForm (z) {
        let y = z.target.name
        let w = z.target.value
        setForm({...form, [y]:w})}

    useEffect (() => fetch('http://127.0.0.1:3000/journals').then(x => x.json()).then(setEntry), [])

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
            setForm({title: "", entry: ""})})}

    return (
        
        <div >
            <h2>User Home</h2>

            <h4>Written Feelings & Facts</h4>
            <form id='form' onSubmit={handleSubmit} >
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