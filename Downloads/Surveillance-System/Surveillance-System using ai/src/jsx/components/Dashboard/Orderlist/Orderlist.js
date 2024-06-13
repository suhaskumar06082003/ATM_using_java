import React,{Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog2 from './Dropdownblog2';
import axios from 'axios';

const DatatablePstatus = () => {
	const [row,setrow]=useState([])
	useEffect(() => {
		axios.get("http://localhost:5000/uploads")
  		.then(res =>setrow(res.data))
	},[])
  console.log(row)
  const data = {
    columns: [
		{label: 'Upload ID', field: 'uploadId', sort: 'asc',  width: 100},
		{label: 'Date', field: 'creationTimestamp',   sort: 'asc', },
		{label: 'UserName', field: 'Username',	sort: 'asc', 	},
		{label: 'Location', field: 'location', sort: 'asc', 	},
		{label: 'URL', field: 's3url', sort: 'asc', 	},
		{label: 'Status', field: 'status',  sort: 'asc',	},
		{label: 'Action', field: 'dropdown',sort: 'asc',	},
    ],	
    rows:row
};

	return (
		<Fragment>
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard no-footer">					
							<MDBDataTable  striped 	small	data={data}	/>		
						</div>
					</div>
				</div>	
			</div>
		</Fragment>
					
	);
}
export default DatatablePstatus;