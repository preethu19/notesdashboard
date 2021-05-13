import React from 'react'
import { FaPlus } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const Header = ()=>{
	return(
		<ul className="navbar sticky-top nav_head">
		  <Link className="logo" to="/">NOTES</Link>
			<Link className="button nav_icon d-flex justify-content-center align-items-center" data-toggle="tooltip" data-placement="bottom" title="Add" to="/form"><FaPlus size={20} /></Link>	
		  
		</ul>
	)
}

export default Header