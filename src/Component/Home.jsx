import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Header from './Header'
import Card from './Card'

const Home =()=> {
	const [Notes, setNotes] = useState([]);
	useEffect(()=>{
		fetch("https://reminders-task.hiring.durbin.live/notes")
      	.then((response) => response.json())
      	.then((data) => {
        	setNotes(data.data.notes)
      });
	}, [Notes])
	
  return (
    
		  <div className="container">
		  <div className="component cards row">
			   { Notes.map((note, index)=>{
				return <Card note={note} key={index} />
			}) }
			  
		  </div>
	  </div>
    
  );
}

export default Home;
