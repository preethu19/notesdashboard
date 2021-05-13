import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { CgDetailsMore } from 'react-icons/cg';
import moment from "moment";

const Card = (props) => {
    const [Note, setNote] = useState(props.note);
    const history = useHistory();
    const deleteurl = `https://reminders-task.hiring.durbin.live/note/${props.note.id}`;
    const detailurl = `/detail/${props.note.id}`;
    const formurl = `/form/${props.note.id}`;
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
    return (
        <div className="col-12 col-md-4 col-sm-6 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text card-list">{props.note.description}</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <Link
                            className="button btn_info"
                            to={detailurl}
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Details"
                        >
                            {' '}
                            <CgDetailsMore />
                        </Link>
                        <Link
                            className="button btn_edit"
                            to={formurl}
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Edit"
                        >
                            <MdModeEdit />
                        </Link>
                        <div
                            className="button btn_delete"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Delete"
							onClick={onDelete}
                        >
                            <MdDelete />
                        </div>
						

                        
                        
                    </div>
                </div>

                <div className="card-footer text-muted">{moment(props.note.created_at).fromNow()}</div>
            </div>
        </div>
    );
};

export default Card;