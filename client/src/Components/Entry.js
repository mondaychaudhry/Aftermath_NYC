import React, {useState} from 'react';
import { useHistory} from 'react-router-dom'

function Entry ({x, entry, setEntry}) {
const [newTitle, setNewTitle] = useState ('')
const [newEntry, setNewEntry] = useState ('')
const [isOn, setIsOn] = useState(true)
const [form, setForm] = useState ({title: "", entry: ""})
const history = useHistory()

function handleDelete (id){
    fetch(`http://127.0.0.1:3000/journals/${id}`, {
        method: "DELETE"}).then(x=>x.json()).then(setEntry)}

function handleUpdate (id, e) {
    e.preventDefault()
    setIsOn(!isOn)
    fetch(`http://127.0.0.1:3000/journals/${id}`, {
        method: "PATCH",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({title: newTitle, entry: newEntry})
    })
    .then(x=>x.json()).then(setEntry)}

return (
    <div className='tile' >
        <h4>{x.title}</h4>
        <br></br>
        <p >{x.entry}</p> 
        <br></br>
  
        {isOn? 
        <button onClick={() => 
            {
               setNewTitle(x.title)
               setNewEntry(x.entry)
               setIsOn(!isOn)
            }
        
        }> Edit </button> :
        <form onSubmit={(e) => handleUpdate(x.id, e)}>
        <input
        type='text'
        name='title'
        className='text'
        value={newTitle}
        onChange={(x) => setNewTitle(x.target.value)}
        />
        <br></br>
        <textarea rows='10' cols='50'
        type='text'
        name='entry'
        className='text'
        value={newEntry}
        onChange={(x) => setNewEntry(x.target.value)}
        />
        <br></br>
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

)}

export default Entry


// {
//     <button onClick={() => setIsOn(!isOn)}>{isOn ? 
//     <form onSubmit={(e) => handleUpdate(x.id, e)}>
//     <input
//     type='text'
//     name='title'
//     className='text'
//     value={newTitle}
//     onChange={(x) => setNewTitle(x.target.value)}
//     />
//     <br></br>
//     <textarea rows='10' cols='50'
//     type='text'
//     name='entry'
//     className='text'
//     value={newEntry}
//     onChange={(x) => setNewEntry(x.target.value)}
//     />
//     <br></br>
//     <input 
//     type='submit'
//     name='submit'
//     value='Save'
//     className='button'
//     />
//     </form>
//      : 'Edit'}</button> 
//      }