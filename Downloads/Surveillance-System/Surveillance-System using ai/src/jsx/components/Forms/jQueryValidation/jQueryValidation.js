import React, { Fragment, useState } from "react";
import PageTitle from "../../../layouts/PageTitle";
import { Modal, ProgressBar, Button } from "react-bootstrap";

const JQueryValidation = () => {
   const [file, setFile] = useState(null);
   const [name, setName] = useState("");
   const [location, setLocation] = useState("");
   const [showModal, setShowModal] = useState(false);
   const [uploadProgress, setUploadProgress] = useState(0);
   const [prediction, setPrediction] = useState("");
   const [apiComplete, setApiComplete] = useState(false);

   const handleFileChange = (event) => {
      setFile(event.target.files[0]);
      setUploadProgress(0);
      setPrediction("");
      setApiComplete(false);
   };

   const handleSubmit = async () => {
      if (!file) {
         alert("Please select a file first.");
         return;
      }

      setShowModal(true);
      setApiComplete(false);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("username", name);
      formData.append("location", location);

      try {
         const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            body: formData,
         });

         const data = await response.json();
         if (response.ok) {
            console.log("File sent successfully to http://localhost:5000/predict");
            setPrediction(`Prediction: ${data.prediction}`);
            setUploadProgress(100); // Indicate loading is complete
         } else {
            console.error("Error sending file to http://localhost:5000/predict", data);
            setUploadProgress(100);
            setPrediction("Failed to process file. Please try again.");
         }
      } catch (error) {
         console.error("Error:", error);
         setPrediction("Error during upload. Check console for details.");
         setUploadProgress(100);
      } finally {
         setApiComplete(true);
      }
   };

   // Define some styles
   const cardStyle = {
     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
     margin: "20px",
     padding: "20px",
     borderRadius: "10px"
   };

   const inputStyle = {
     width: "100%",
     padding: "10px",
     margin: "10px 0",
     display: "inline-block",
     border: "1px solid #ccc",
     borderRadius: "4px",
     boxSizing: "border-box"
   };

   const buttonStyle = {
     backgroundColor: "#4CAF50",
     color: "white",
     padding: "14px 20px",
     margin: "8px 0",
     border: "none",
     borderRadius: "4px",
     cursor: "pointer",
   };

   const buttonHoverStyle = {
     ...buttonStyle,
     backgroundColor: "#45a049"
   };

   return (
      <Fragment>
         <PageTitle activeMenu="Validation" motherMenu="Form" />

         <div className="row">
            <div className="col-lg-12">
               <div className="card" style={cardStyle}>
                  <div className="card-header">
                     <h4 className="card-title">Upload Video</h4>
                  </div>
                  <div className="card-body">
                     <div className="form-validation">
                        <form
                           className="form-valide"
                           action="#"
                           method="post"
                           onSubmit={(e) => e.preventDefault()}
                        >
                           <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                              <div>
                                 <label>Name</label>
                                 <input style={inputStyle} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                              </div>
                              <div>
                                 <label>Location</label>
                                 <input style={inputStyle} type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                              </div>
                              <div>
                                 <label>Upload Recording</label>
                                 <input style={inputStyle} type="file" onChange={handleFileChange} />
                              </div>
                              <div>
                                 <button style={buttonStyle} type="button" onClick={handleSubmit}
                                         onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
                                         onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}>
                                    Submit
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Modal
           show={showModal}
           onHide={() => apiComplete && setShowModal(false)}
           backdrop="static"
           keyboard={false}
         >
            <Modal.Header closeButton={apiComplete}>
               <Modal.Title>Processing File</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} animated={uploadProgress < 100} />
               {uploadProgress === 100 && (
                  <Fragment>
                     <p>Video uploaded and processed successfully!</p>
                     <video controls>
                        <source src={URL.createObjectURL(file)} type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                     <p>{prediction}</p>
                  </Fragment>
               )}
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShowModal(false)} disabled={!apiComplete}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </Fragment>
   );
};

export default JQueryValidation;
