import { useRef, useState, useEffect } from 'react';
import {connect} from "react-redux";
import {loginAction} from "../../Services/Actions/AuthAction";
import {sendCustomerDetaisRequest} from "../../Services/Actions/CustomerAction";
import {Link} from "react-router-dom";
import {error} from '../share/Error'



const Login = ({loginAction, error})=>{
    const userRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('csenazmul96@gmail.com');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginAction({ email, password })
    }

    return (
        <div className="login_area ">
            <div className="logo">
                <Link to="/"><img src="../../images/logo.png" alt="" /></Link>
            </div>
            <div className="login_content">
                <div className="login_banner">
                    <img src="../../images/login_bg.png" alt="" className="img-fluid" />
                </div>
                <div className="login_form">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h2>Existing Accounts Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                id="username"
                                className="form-control"
                                placeholder="Email"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="form-group has_error">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                className="form-control"
                                onChange={(e) => setPwd(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="d_flex_start mt_20 mb_20 login_btn_wrap">
                            <button type="submit" className="btn login_btn">LOGIN</button>
                        </div>
                    </form>
                    <h2>New Account Registration</h2>

                    <button type="submit" className="btn login_btn">Click Here To Register</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>({
    user: state.AuthReducer.user
})
export default connect(mapStateToProps, {loginAction, sendCustomerDetaisRequest, error}) (Login)
