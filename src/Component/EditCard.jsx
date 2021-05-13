import React, {useEffect, useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import Header from './Header'

const EditCard = (props)=>{
	
	const {noteid} = useParams();
	const [Note, setNote] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	useEffect(()=>{
		fetch(`https://reminders-task.hiring.durbin.live/note/${noteid}`)
      	.then((response) => response.json())
      	.then((data) => {
        	setNote(data.data.note);
			setTitle(data.data.note.title);
			setDescription(data.data.note.description);
      });
	}, [])
	const [error, setError] = useState(false)
	const history = useHistory();
	const getTitle = (event)=>{
		setTitle(event.target.value)
	}
	const getDescription = (event)=>{
		setDescription(event.target.value)
	}
	
  const addButtonPressed = (e)=> {
	  e.preventDefault()
    const requestOptions = {
      method: "PUT",
	headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
		description: description,
      }),
    };
    fetch(`https://reminders-task.hiring.durbin.live/note/${noteid}`, requestOptions)
      .then((response) => {
        if (response.ok) {
			setError(false)
			history.push('/')
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

	return(
		<div className="AddHeader">
			{ error?(
				<div class="alert elevated alert-danger col-10" role="alert">
            All fields are required
          </div>
			): null}
			    <div className="container col-10 col-md-6 justify-content-center">
        <form id="form" className="form" action="/form">
 
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="Enter title" className="input" onChange={getTitle} value={title} disabled/>
            </div>
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea type="text" onChange={getDescription} value={description} id="description" placeholder="Enter description" className="input" rows="10"></textarea>
               
            </div>
           
            <button onClick={addButtonPressed} className="button btn_add">Edit</button>	
        </form>
    </div>
			
		</div>
	)
}
export default EditCard