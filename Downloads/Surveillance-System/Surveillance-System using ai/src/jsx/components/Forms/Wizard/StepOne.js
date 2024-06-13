// import React, {useState} from "react";
// import {Dropdown} from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// //import axios from 'axios';

// var Author , Publication , TItle ,If, Doi ;

// const StepOne = (props) => {
//    console.log("Here,in step ONE");

// const [publicaton,setpublication]=useState("Type of Publication");

// const handlebook=()=>{
// setpublication("Book chapter");
// }

// const handleCon=()=>{
//    setpublication("Conference paper");
// }

// const handleJournals=()=>{
//    setpublication("Journal");
// }

// const [author, setAuthor] = useState("");
// const [publication, setPublication]= useState("");
// const [title, setTitle]= useState("");
// const [IF, setIF]= useState("");
// const [DOI, setDOI]=useState("");

// //const FirstStep = (props) => {
//    Author = author;
//    Publication = publication;
//    TItle = title;
//    If = IF;
//    Doi = DOI;
  
  
//    const {  handleSubmit} = useForm({
//      defaultValues: {
//        author,
//        title,
//        publicaton,
//        IF,
//       DOI
//      }
//    }); 

//    async function onSubmit(e){
//       e.preventDefault();
  
//     }

   
//    return (
//       <section>

// <Dropdown className="dropdown">
// 							<Dropdown.Toggle as="button" type="button" className="btn border btn-rounded text-black dropdown-toggle">
// 								Type of Publication
// 							</Dropdown.Toggle>
// 							<Dropdown.Menu className="dropdown-menu">
//                      <Dropdown.Item className="dropdown-item" onClick={handleJournals} >Journal</Dropdown.Item>
//                      <Dropdown.Item className="dropdown-item" onClick={handleCon} >Conference paper</Dropdown.Item>
//                      <Dropdown.Item className="dropdown-item" onClick={handlebook} >Book chapter</Dropdown.Item>
// 							</Dropdown.Menu>
// 						</Dropdown>
//          <div className="row" onSubmit={handleSubmit(onSubmit)}>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">Name of the Authors*</label>
//                   <input
//                      type="text"
//                     // name="author"
//                      value= {author} 
//                      className="form-control"
//                      placeholder=""
//                     onChange={(e) => setAuthor(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">Title of the paper*</label>
//                   <input
//                      type="text"
//                      name="Title"
//                     value={title}
//                      className="form-control"
//                      placeholder=""
//                    onChange={(e) => setTitle(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">{publicaton}*</label>
//                   <input
//                      type="text"
//                      name="publicaton"
//                      className="form-control"
//                      value={publication}
//                      id="inputGroupPrepend2"
//                      aria-describedby="inputGroupPrepend2"
//                      placeholder=""
//                      onChange={(e) => setPublication(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">IF*</label>
//                   <input
//                      type="text"
//                      name="IF"
//                      value={IF}
//                      className="form-control"
//                      placeholder=""
//                      onChange={(e) => setIF(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//             <div className="col-lg-12 mb-3">
//                <div className="form-group">
//                   <label className="text-label">DOI*</label>
//                   <input
//                      type="text"
//                      name="DOI"
//                      value={DOI}
//                     className="form-control"
//                     onChange={(e) => setDOI(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// };
// function FirstStep(){
//    return {Author , Publication , TItle ,If, Doi }
//  } 
// export  {StepOne , FirstStep};
 

