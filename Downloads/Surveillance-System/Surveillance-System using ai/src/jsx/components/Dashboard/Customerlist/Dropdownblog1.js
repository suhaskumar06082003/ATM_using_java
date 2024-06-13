import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

class Dropdownblog1 extends React.Component{
	render(props){
		return(
			<>
				<Dropdown>
					<Dropdown.Toggle   variant	className="table-dropdown i-false" >
						<svg width="24px" height="24px"	viewBox="0 0 24 24" version="1.1">
							<g stroke="none"	strokeWidth="1"	fill="none"	fillRule="evenodd" >
								<rect x="0" y="0" width="24" height="24"></rect>
								<circle	fill="#000000"	cx="5"	cy="12"	r="2"></circle>
								<circle	fill="#000000"	cx="12"	cy="12"	r="2"></circle>
								<circle	fill="#000000"	cx="19"	cy="12"	r="2"></circle>
							</g>
						</svg>
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item className="text-black"> 	
							<svg className="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6F6F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
								<path d="M12 16V12" stroke="#6F6F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
								<path d="M12 8H12.01" stroke="#6F6F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
							View Details

						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>	
			</>
		)	
	}
} 
export default Dropdownblog1;