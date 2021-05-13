import React, {useEffect, useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { CgDetailsMore } from 'react-icons/cg';
import moment from "moment";

const Card = ()=>{
	const {noteid} = useParams();
	const history = useHistory();
	 const deleteurl = `https://reminders-task.hiring.durbin.live/note/${noteid}`;
    const formurl = `/form/${noteid}`;
	const [Note, setNote] = useState([]);
	useEffect(()=>{
		fetch(`https://reminders-task.hiring.durbin.live/note/${noteid}`)
      	.then((response) => response.json())
      	.then((data) => {
        	setNote(data.data.note)
      });
	}, [])
	const onDelete = () => {
        const requestOptions = {
            method: 'DELETE',
        };
        fetch(deleteurl, requestOptions).then((response) => {
            if (response.ok) {
                history.push('/');
            } else {
                console.log(response);
            }
        });
    };
	return(
		 <div className="container">
		<div className="card">
            <div className="card-body">
              <h5 className="card-title">{Note.title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{moment(Note.created_at).fromNow()}</h6>
              <p className="card-text">{Note.description}</p>
			  <div className="d-flex justify-content-around align-items-center">
				  
                <Link className="button btn_edit" to={formurl} data-toggle="tooltip" data-placement="bottom" title="Edit">						<MdModeEdit/></Link>	
				  <div className="button btn_delete" onClick={onDelete} data-toggle="tooltip" data-placement="bottom" title="Delete"><MdDelete /></div>
				  
				</div>
            </div>
            
          </div>
		</div>

	)
}

export default Card;