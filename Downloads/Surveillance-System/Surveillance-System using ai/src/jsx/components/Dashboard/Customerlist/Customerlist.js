import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import Dropdownblog1 from './Dropdownblog1';
import PageTitle from "../../../layouts/PageTitle";


const Customerlist = () => {
	
  const data = {
    columns: [
		{label: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					{/* <input type="checkbox" className="custom-control-input" id="checkAll" required="" />	
					<label className="custom-control-label" htmlFor="checkAll"></label>*/}
				</div>
			</div>
		, },
		// {label: 'Order ID', field: 'id', sort: 'asc',  width: 100},
		// {label: 'date', field: 'date',   sort: 'asc', },
		{label: 'Name', field: 'customer',	sort: 'asc', 	},
		{label: 'Owner Type', field: 'location', sort: 'asc', 	},
		{label: 'Total Reports', field: 'amount', sort: 'asc', 	},
		{label: 'Email-id', field: 'status',  sort: 'asc',	},
		// {label: 'Action', field: 'dropdown',sort: 'asc',	},
    ],	
    rows: [
		{	check: 
				<div className="sorting_1 p-0 text-center">
					{/* <div className="custom-control custom-checkbox ml-2">
						<input type="checkbox" className="custom-control-input" id="customCheckBox66" required="" />	
						<label className="custom-control-label" htmlFor="customCheckBox66"></label>						
					</div> */}
				</div>,
			id: '#5552311',	date: '26 March 2020 ',	customer:"User 1",	location: 'Primary',	amount: '10',
			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">user1@gmail.com</Link>,
			dropdown:<Dropdownblog1 />,
		},
		{
			check: 
			<div className="sorting_1 p-0 text-center">
				<div className="custom-control custom-checkbox ml-2">
					{/* <input type="checkbox" className="custom-control-input" id="customCheckBox67" required="" />	
					<label className="custom-control-label" htmlFor="customCheckBox67"></label>						 */}
				</div>
			</div>,	
			id: '#5552322',	date: '27 March 2020',	customer: 'User 2',location: 'Secondary', amount: '7',
			status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">user2@gmail.com</Link>,
			dropdown: <Dropdownblog1 />,
		},
		// {
		// 	check: 
		// 	<div className="sorting_1 p-0 text-center">
		// 		<div className="custom-control custom-checkbox ml-2">
		// 			<input type="checkbox" className="custom-control-input" id="customCheckBox68" required="" />	
		// 			<label className="custom-control-label" htmlFor="customCheckBox68"></label>						
		// 		</div>
		// 	</div>,	
		// 	id: '#5552323',	date: '28 March 2020',	customer: 'Dr. SHEELA S V',location: 'Professor',amount: '5',
		// 	status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">ssv.ise@bmsce.ac.in</Link>,
		// 	dropdown: <Dropdownblog1 />,
		// },
		// {
		// 	check: 
		// 	<div className="sorting_1 p-0 text-center">
		// 		<div className="custom-control custom-checkbox ml-2">
		// 			{/* <input type="checkbox" className="custom-control-input" id="customCheckBox69" required="" />	
		// 			<label className="custom-control-label" htmlFor="customCheckBox69"></label>						 */}
		// 		</div>
		// 	</div>,		
		// 	id: '#5552349',	date: '21 March 2020',	customer: 'GURURAJA H S',location: 'Assistant Professor',amount: '7',
		// 	status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">gururajhs.ise@bmsce.ac.in</Link>,
		// 	dropdown: <Dropdownblog1 />,
		// },
		// {
		// 	check: 
		// 	<div className="sorting_1 p-0 text-center">
		// 		<div className="custom-control custom-checkbox ml-2">
		// 			{/* <input type="checkbox" className="custom-control-input" id="customCheckBox70" required="" />	
		// 			<label className="custom-control-label" htmlFor="customCheckBox70"></label>						 */}
		// 		</div>
		// 	</div>,		
		// 	id: '#5552356',	date: '12 March 2020',	customer: 'PALLAVI B',location: 'Assistant Professor',	amount: '5',
		// 	status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">pallavib.ise@bmsce.ac.in</Link>,
		// 	dropdown: <Dropdownblog1 />,
		// },
		// {
		// 	check: 
		// 	<div className="sorting_1 p-0 text-center">
		// 		<div className="custom-control custom-checkbox ml-2">
		// 			{/* <input type="checkbox" className="custom-control-input" id="customCheckBox71" required="" />	
		// 			<label className="custom-control-label" htmlFor="customCheckBox71"></label>						 */}
		// 		</div>
		// 	</div>,		
		// 	id: '#5552358',	date: '15 March 2020',	customer: 'RASHMI R',location: 'Assistant Professor',	amount: '2',
		// 	status: <Link to ={"/ecom-product-detail"} className="btn bgl-light text-black btn-sm">rashmir.ise@bmsce.ac.in</Link>,
		// 	dropdown: <Dropdownblog1 />,
		// },
		
		
	],
	
	
};
	const options = {
		filterType: 'checkbox',
	};
	return (
		<Fragment>
			<PageTitle activeMenu="Faculty List" motherMenu="Dashboard" />

			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<div  className="display mb-4 dataTablesCard customer-list-table">		
							<MDBDataTable data={data} options={options} />	
						</div>
					</div>
				</div>	
			</div>
		</Fragment>		
		
	);
}
export default Customerlist;