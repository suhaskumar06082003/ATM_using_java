import React, { useState , useEffect} from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
	Row,
	Col,
	Card,
	Table,
	Badge,
	Dropdown,
	ProgressBar,
  } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";

var jso={
	email: "",
	username : "",
	experience : "",
};
var data;
var email;
const ProductDetail = () => {
  const [reviewToggle, setReviewToggle] = useState(false);
  const [activeTab, setActiveTab] = useState('0');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const fetchData = async () => {
      try{
       const response = await fetch(`/api/profiles/hello@gmail.com`)
       
      data = await response.json()
       jso = data[0];
      console.log("Inside");
       console.log(data);
       console.log(data[0].email);  
       console.log(data[0].experience);
      } catch (error) {
      console.log("error", error);
      }
    };

    console.log("REached after");
    console.log(jso.email);
    console.log(jso.experience);
   console.log("read");
  // fetchData();
   useEffect(()=>{
    fetchData();
   },[]);

  return (
    <>
      <PageTitle motherMenu="Profile" activeMenu="Rashmi R" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
					<div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
					  {/* Tab panes */}
						<Tab.Container defaultActiveKey="first">
							{/* <Tab.Content>
								<Tab.Pane eventKey="first">
									<img className="img-fluid" src="./../../../../images/card/fifth.jpeg" alt="" />
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<img className="img-fluid" src="./../../../../images/card/fifth.jpeg" alt="" />
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<img className="img-fluid" src="./../../../../images/card/fifth.jpeg"    alt="" />
								</Tab.Pane>
								<Tab.Pane eventKey="four">
									<img className="img-fluid" src="./../../../../images/card/fifth.jpeg" alt="" />
								</Tab.Pane>
							</Tab.Content> */}
							<div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
							  {/* Nav tabs */}
								<Nav as="ul" className="nav slide-item-list mt-3" role="tablist">
									 {/* <Nav.Item as="li">
										<Nav.Link as="a" eventKey="first" to="#first">
											<img className="img-fluid" src={tab1} alt=""width={50} />
										</Nav.Link>
									</Nav.Item> */}
									<Nav.Item as="li">
										<Nav.Link as="a" eventKey="second" to="#second">
											<img className="img-fluid" src="https://ciie-backend.s3.amazonaws.com/profile-images/fifth.jpeg" alt="" width={50}/>
										</Nav.Link>
									</Nav.Item>
									{/* <Nav.Item as="li">
										<Nav.Link as="a" eventKey="third" to="#third">
											<img  className="img-fluid" src={tab3} alt="" width={50}/>
										</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li">
										<Nav.Link as="a" to="#for" eventKey="four">
											<img  className="img-fluid" src={tab4} alt="" width={50}/>
										</Nav.Link> */}
									{/* </Nav.Item>  */}
								</Nav>
							</div>
						</Tab.Container>
					</div>
                {/*Tab slider End*/}

                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                  <div className="product-detail-content">
                    {/*Product details*/}
                    <div className="new-arrival-content pr">
                      <h4>Rashmi R</h4>
						<div className="comment-review star-rating">
							<ul>
								<li className="star" title="Poor" data-value={1}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="Fair" data-value={2}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="Good" data-value={3}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="Excellent" data-value={4}>
									<i className="fa fa-star fa-fw" />
								</li>
								<li className="star" title="WOW!!!" data-value={5}>
									<i className="fa fa-star fa-fw" />
								</li>
							</ul>
							<span className="review-text">(5 years experience)  </span>
						</div>
						{/* <div className="d-table mb-2">
							<p className="price float-left d-block">$325.00</p>
						</div> */}
						<p>Email id:{" "}<span className="item"> {" "}{jso.email} </span></p>
						<p>Designation: <span className="item">{jso.desgination}</span>{" "}</p>
						<p>
							Research Interests:&nbsp;&nbsp; 
							<span className="badge badge-success light mr-1">AI and ML</span>
							<span className="badge badge-success light mr-1">Networking</span>
							<span className="badge badge-success light mr-1">Big Data</span>
						</p>
						<p className="text-content">
							{jso.aboutme}
						</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Submissions</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive className="header-border ">
                <thead>
                  <tr>
                    
                    <th>Publication Type</th>
					<th>Title</th>
                    <th>Link for the publication</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Journal
                    </td>
                    <td>intro to AI</td>
                    <td>
					<a href="https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf">https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf</a>
                    </td>
                    <td>
                      <Badge variant="success">Approved</Badge>
                    </td>
                    
                  </tr>
				  <tr>
                    <td>
                      Journal
                    </td>
                    <td>intro to AI</td>
                    <td>
					<a href="https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf">https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf</a>
                    </td>
                    <td>
                      <Badge variant="success">Approved</Badge>
                    </td>
                    
                  </tr>
				  <tr>
                    <td>
                      Journal
                    </td>
                    <td>intro to AI</td>
                    <td>
					<a href="https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf">https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf</a>
                    </td>
                    <td>
                      <Badge variant="success">Approved</Badge>
                    </td>
                    
                  </tr>
				  <tr>
                    <td>
                      Journal
                    </td>
                    <td>intro to AI</td>
                    <td>
					<a href="https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf">https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf</a>
                    </td>
                    <td>
                      <Badge variant="success">Approved</Badge>
                    </td>
                    
                  </tr>
              
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
		<Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Submissions</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive hover className="header-border verticle-middle">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Link for the Publication</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Intro to AI and ML</td>
                    <td>
                      <a href="https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf">https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf</a>
                    </td>
                    <td>
                      <Badge variant="success">Approved</Badge>
                    </td>
                  </tr>
				  <tr>
                    <th>2</th>
                    <td>Intro to AI and ML</td>
                    <td>
                      <a href="https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf">https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf</a>
                    </td>
                    <td>
                      <Badge variant="primary light">Pending</Badge>
                    </td>
                  </tr>
				  <tr>
                    <th>3</th>
                    <td>Intro to AI and ML</td>
                    <td>
                      <a href="https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf">https://ciie-backend.s3.amazonaws.com/Shashank+MHello.pdf</a>
                    </td>
                    <td>
                      <Badge variant="success">Approved</Badge>
                    </td>
                  </tr>
              
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
    </>
  );
};

export default ProductDetail;
