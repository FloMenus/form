import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const reg = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      emailIsValid: (reg.test(e.target.value))
    })
    console.log(this.state.emailIsValid)
  }

  handlePasswordChange = (e) => {
    this.setState({
      password : e.target.value,
      passwordIsValid: (e.target.value.length > 4)
    })
    console.log(this.state.passwordIsValid)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({
        isSubmitted: true
      })
    }
    console.log (this.state.isSubmitted)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="success">{this.state.email}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleEmailChange}
            ></input>
          </div>
          <div className="form-group">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={this.handlePasswordChange}
            ></input>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" for="exampleCheck1">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
