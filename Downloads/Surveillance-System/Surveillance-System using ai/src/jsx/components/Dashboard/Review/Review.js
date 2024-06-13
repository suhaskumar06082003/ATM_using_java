import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageTitle from "../../../layouts/PageTitle";

class Review extends React.Component {
  state = {
    videos: []
  };

  componentDidMount() {
    axios.post("http://localhost:5000/list-files")
      .then(response => {
        this.setState({ videos: response.data });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }

  render() {
    return (
      <>
        <PageTitle activeMenu="Submissions" motherMenu="Dashboard" />
        <Fragment>
          <div className="row">
            <div className="col-xl-12">
              <div className="card review-table p-0 border-0">
                <div className="card-body">
                  {this.state.videos.map((video, index) => (
                    <div key={index} style={{ margin: '10px 0', padding: '10px', borderBottom: '1px solid #ccc' }}>
                      <h4>Video {index + 1}</h4>
                      <video width="320" height="240" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </>
    );
  }
}

export default Review;
