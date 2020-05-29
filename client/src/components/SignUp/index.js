import React from 'react';
// import '../signup.css';
const Signup = (props) => {
    return (
        <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Register YourSelf</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="name" onChange={props.inp} className="form-control" placeholder="Your Name *" />
                            </div>
                            <div className="form-group">
                                <input type="number" id="phone" onChange={props.inp} className="form-control" placeholder="Phone Number *" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" id="pass" onChange={props.inp} className="form-control" placeholder="Your Password *" />
                            </div>
                            <div className="form-group">
                                <input type="number" id="no" onChange={props.inp} className="form-control" placeholder="Your Age" />
                            </div>
                        </div>
                    </div>
                    <button type="button" onClick={props.add} className="btnSubmit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;