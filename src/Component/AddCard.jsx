import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header'

const AddCard = (props)=>{
	
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
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
	  console.log(JSON.stringify({
        title: title,
		description: description,
      }))
    const requestOptions = {
      method: "POST",
	headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
		description: description,
      }),
    };
    fetch("https://reminders-task.hiring.durbin.live/note", requestOptions)
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
                <input type="text" id="title" placeholder="Enter title" className="input" onChange={getTitle} />
            </div>
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea type="text" onChange={getDescription} id="description" placeholder="Enter description" className="input" rows="10"></textarea>
               
            </div>
           
            <button onClick={addButtonPressed} className="button btn_add">Add</button>	
        </form>
    </div>
			
		</div>
	)
}
export default AddCard