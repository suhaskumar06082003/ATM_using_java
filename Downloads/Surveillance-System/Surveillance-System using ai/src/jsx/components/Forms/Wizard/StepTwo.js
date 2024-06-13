// import React, {useState } from "react";
// import { useForm } from 'react-hook-form';
// var FirstName , Date , Phonenumber , Place;
// const StepTwo = (props) => {
//    console.log("Here,in step Two");
//    const [firstName, setfirstName] = useState("");
//    const [date, setdate] = useState("");
//    const [phoneNumber, setphoneNumber] = useState("");
//    const [place, setplace] = useState("");

//    FirstName = firstName;
//    Date = date;
//    Phonenumber = phoneNumber;
//    Place = place;

//   const { handleSubmit} = useForm({
//     defaultValues: {
//        firstName,
//        date,
//        phoneNumber,
//        place,
//     }
//   });

//   const onSubmit = (data) => {
//     props.updateUser(data);
//     props.history.push('/StepThree');
//   };



//    return (
//       <section>
//          <div className="row" onSubmit={handleSubmit(onSubmit)}>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">PP*</label>
//                   <input
//                      type="text"
//                      name="firstName"
//                      value={firstName}
//                      className="form-control"
//                      placeholder=""
//                     onChange={(e) => setfirstName(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">Month year*</label>
//                   <input
//                      type="date"
//                      name="date"
//                      value={date}
//                      className="form-control"
//                      id="emial1"
//                      placeholder="example@example.com.com"
//                       onChange={(e) => setdate(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">Vol*</label>
//                   <input
//                      type="text"
//                      name="phoneNumber"
//                      value={phoneNumber}
//                      className="form-control"
//                      placeholder=""
//                      onChange={(e) => setphoneNumber(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//             <div className="col-lg-12 mb-2">
//                <div className="form-group">
//                   <label className="text-label">
//                      Issue.ISSN*
//                   </label>
//                   <input
//                      type="text"
//                      name="place"
//                      value={place}
//                      className="form-control"
//                      onChange={(e) => setplace(e.target.value)}
//                      required
//                   />
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// };
// function Secondstep(){
//    return {FirstName , Date , Phonenumber , Place}
// }
// export {StepTwo, Secondstep};
