import React, { useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
//import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { setAlert } from "../../actions/alert";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const dispatch = useDispatch();

    const onSubmit = async e => {
        e.preventDefault();
        if (formData.password !== formData.password2) {
            dispatch(setAlert("Passwords do not match!", "danger"));
        } else {
            console.log("send request here to db");
        }
    };

    /* const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert("Passwords do not match", "danger");
        } else {
            const newUser = {
                name,
                email,
                password,
            };

            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                const body = JSON.stringify(newUser);

                //can use short url, because of proxy
                const res = await axios.post("/api/users", body, config);
                // should be token
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        }
    }; */

    return (
        <section className="container">
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Create Your Account
            </p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        minLength="2"
                        maxLength="100"
                        required
                        autoComplete="username"
                        value={name}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        maxLength="100"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={e => onChange(e)}
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image,
                        use a Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        maxLength="50"
                        autoComplete="new-password"
                        value={password}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                        maxLength="50"
                        autoComplete="new-password"
                        value={password2}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-primary"
                    value="Register"
                />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </section>
    );
};

/* Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
};
 */
/* export default connect(null, { setAlert })(Register); */

export default Register;
