import React from 'react';
// import '../login.css';
const Login = (props) => {
    return (
        <div classNameName="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign In</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-facebook-square"></i></span>
                            <span><i className="fab fa-google-plus-square"></i></span>
                            <span><i className="fab fa-twitter-square"></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" id="logname" onChange={props.log} className="form-control" placeholder="username" />

                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" id="logpass" onChange={props.log} className="form-control" placeholder="password" />
                            </div>

                            <div className="form-group">
                                <input type="submit" onClick={props.current} value="Login" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<a href="">Sign Up</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export {Login};