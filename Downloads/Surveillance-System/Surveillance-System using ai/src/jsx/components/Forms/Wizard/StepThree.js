import React , {useState} from "react";
import { useForm } from 'react-hook-form';
var link;

const StepThree = (props) => {
   console.log("Here,in step THREE");
const [Link, setLink]= useState("");
   const { handleSubmit} = useForm({
     defaultValues: {
       Link,
     }
   });
 link = Link;
   const onSubmit = (data) => {
     props.updateUser(data);
     props.history.push('/StepFour');
   };
   return (
      <section>
         <div className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Link*</label>
                  <input
                     type="text"
                     value={Link}
                     className="form-control"
                     placeholder="Paste the link of the publication Here"
                     onChange={(e) => setLink(e.target.value)}
                     required
                  />
               </div>
            </div>
            
            
         </div>
      </section>
   );
};
function Thirdstep(){
   return {link};
}

export  {StepThree, Thirdstep};
 
