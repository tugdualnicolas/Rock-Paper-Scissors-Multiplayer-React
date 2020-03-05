import React, { Component } from "react";
import Errormsg from "./Errormsg";
//import {useHistory} from "react-router-dom"
class Signup extends Component {
  state = {
    username: "",
    name: "",
    password: "",
    email: "",
    errors: {
      name: "",
      username: "",
      email: "",
      password: ""
    }
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name =
          value.length < 5 ? "name must be atleast 5 characters long" : "";
        break;
      case "username":
        errors.username = value.includes(" ")
          ? "username must not contain white spaces"
          : "";
        break;
      case "email": //eslint-disable-next-line
        errors.email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          value
        )
          ? ""
          : "Enter a valid email address";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "password must be 8 characters long" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = e => {
    const { username, name, password, email } = this.state;
    e.preventDefault();
    console.log(this.state);
    if (this.validateForm(this.state.errors)) {
      fetch("http://localhost:4001/users/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          password: password,
          username: username,
          email: email
        })
      })
        .then(res => {
          res.json().then(json => {
            if (json.msg === "success") {
              console.log("sdss");
              this.props.history.push("/singleplayer");
              return false;
            }

            if (json.errors.email) {
              const errors = this.state.errors;
              errors.email = json.errors.email;
              this.setState({
                errors
              });
            }
            if (json.errors.username) {
              const errors = this.state.errors;
              errors.username = json.errors.username;
              this.setState({
                errors
              });
            }
          });
        })
        .catch(err => console.log(err));
    } else {
      return false;
    }
  };
  render() {
    const { errors } = this.state;
    //console.log(errors)
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <h3>SIGNUP</h3>
            <label htmlFor="uname">
              <b>Username</b>
              <br></br>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              onChange={e => {
                this.handleChange(e);
              }}
            />
            {errors.username.length > 0 && (
              <span className="error">{errors.username}</span>
            )}
            <br></br>
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              onChange={e => {
                this.handleChange(e);
              }}
            />
            {errors.name.length > 0 && (
              <span className="error">{errors.name}</span>
            )}
            <br></br>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              onChange={e => {
                this.handleChange(e);
              }}
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
            <br></br>
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              onChange={e => {
                this.handleChange(e);
              }}
            />
            {errors.password.length > 0 && (
              <span className="error">{errors.password}</span>
            )}

            <button type="submit">Signup</button>
          </div>
          {this.state.errormsg
            ? this.state.errormsg.map(error => {
                return <Errormsg errormsg={error} key={Math.random() * 10} />;
              })
            : ""}
          <div className="container">
            <button
              type="button"
              className="cancelbtn"
              onClick={() => {
                this.props.history.push("/singleplayer");
              }}
            >
              Cancel
            </button>
            <span className="psw">                        
              <a href="sdfsd">Already have an account?,login</a>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
