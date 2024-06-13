import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';

/*
import logo from '../../images/logo.png'
import logotext from '../../images/logo-text.png'
import login from "../../images/bg-login2.png";
import loginbg from "../../images/bg-login.jpg";
*/
function Login (props) {
    const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

  async  function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ; 
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(email, password, props.history));

        try {
          const res = await axios.post("/api/auth/login", {
            email,
            password,
          });
          console.log(email);
          console.log(password);
          window.location.replace("https://cloud.mongodb.com/v2/623a85326f0bd46e03777c05#metrics/replicaSet/623a85e0deb20a22f43c449a/explorer/myFirstDatabase/users/find");

          // console.log(res.data);
        } catch (err) {
          console.log(err);
        }

    }

  return (
        <div className="login-main-page" style={{backgroundImage:"url(https://w0.peakpx.com/wallpaper/505/363/HD-wallpaper-lovely-pink-red-blur-gradation.jpg)"}}>
            <div className="login-wrapper">
                <div className="login-aside-left" style={{backgroundImage:"url(https://media.istockphoto.com/id/1301521817/photo/cctv-camera-in-luxury-hotel-lobby-in-modern-office-entrance-or-in-shopping-mall-on-blurry.jpg?s=612x612&w=0&k=20&c=jugis2dg6XI1Hy-UBnI5A2RaG6TLLODAYthSv8-Egpk=)"}}>
                    <Link to="/dashboard" className="login-logo">
                        <img src="" alt="" className="mr-2"/>
                        {/* <img src={logotext} alt="" className="ml-1"/> */}
                        <h1>WatchfulEye Systems</h1>
                      </Link>
                    <div className="login-description">
                        <h4 className="text-black  mb-2">Precision Surveillance at Your Fingertips</h4>
                        {/* <p className="fs-12 text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p> */}
                        <img src='https://safeguardsecuritygeorgia.com/wp-content/uploads/2017/03/Blue-lock-background.jpg' width={"350rem"} height={"210rem"}></img>
                        <ul className="social-icons mt-4">
                            <li><Link to={"#"}><i className="fa fa-instagram"></i></Link></li>
                            <li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
                        </ul>
                        <div className="mt-5">
                            <Link to={"#"} className="text-black mr-4">Privacy Policy</Link>
                            <Link to={"#"} className="text-black mr-4">Contact</Link>
                            {/* <Link to={""} className="text-black">© Ciie Developers Wing</Link> */}
                            <a href='' target='_blank' className="text-black">© WatchfulEye Systems</a>
                        </div>
                    </div>
                </div>
                <div className="login-aside-right">
                    <div className="row m-0 justify-content-center h-100 align-items-center">
                      <div className="col-xl-9 col-xxl-9">
                        <div className="authincation-content">
                          <div className="row no-gutters">
                            <div className="col-xl-12">
                              <div className="auth-form-1">
                                <div className="mb-4">
                                    <h3 className="text-white mb-1"></h3>
                                    <p className="text-white">Sign in</p>
                                </div>
                                {props.errorMessage && (
                                    <div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
                                        {props.errorMessage}
                                    </div>
                                )}
                                {props.successMessage && (
                                    <div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
                                        {props.successMessage}
                                    </div>
                                )}
                                <form onSubmit={onLogin}>
                                    <div className="form-group">
                                        <label className="mb-2 ">
                                          <strong className="text-white">Email</strong>
                                        </label>
                                        <input type="email" className="form-control"
                                          value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                        />
                                      {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-2 "><strong className="text-white">Password</strong></label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                                    </div>
                                  <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                      <div className="custom-control custom-checkbox ml-1 ">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="basic_checkbox_1"
                                        />
                                        <label
                                          className="form-check-label text-white"
                                          htmlFor="basic_checkbox_1 "
                                        >
                                          Remember my preference
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <button
                                      type="submit"
                                      className="btn bg-white text-primary btn-block"
                                    >
                                      Sign In
                                    </button>
                                  </div>
                                </form>
                                <div className="new-account mt-2">
                                  <p className="text-white">
                                    Don't have an account?{" "}
                                    <Link className="text-white" to="./page-register">
                                      Sign up
                                    </Link>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
}



// const mapStateToProps = (state) => {
//     return {
//         errorMessage: state.auth.errorMessage,
//         successMessage: state.auth.successMessage,
//         showLoading: state.auth.showLoading,
//     };
// };
// export default connect(mapStateToProps)(Login);
export default Login