import React, { Component } from "react";
import "./signIn.scss";
import FormInput from "../form-input/FormInput";
import CustomeButton from "../custom-button/CustomeButton";
import { signWithGoogle } from "../../firebase/Firebase.utile";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
          />
          <div className="button">
            <CustomeButton type="submit">Sign In</CustomeButton>
            <CustomeButton onClick={signWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomeButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
