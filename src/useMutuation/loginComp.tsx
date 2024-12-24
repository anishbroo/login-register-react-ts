import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DataResponse, LOGIN_USER } from "../mutation/loginMutation";
import "../css/loginComp.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginComponent: React.FC = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  // useMutation hook for calling the mutation
  const [login, { loading, data }] = useMutation<DataResponse>(LOGIN_USER);

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const handleCancel = () => {
    setErrorMessage("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (username === "" || password === "") {
      setErrorMessage("Both fields are required");
      return;
    }

    setErrorMessage("");

    try {
      const response = await login({
        variables: { input: { username, password } },
      });
      if (response.data) {
        localStorage.setItem("access_token", response.data.login.access_token);
        alert("Login successful");
      }
    } catch (err) {
      setErrorMessage("Invalid username or password");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type={passwordVisible ? "text" : "password"} // Toggle between text and password
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="eye-button"
            onClick={handlePasswordVisible}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="forgot-container">
          <p>Forgot your password?</p>
        </div>

        {loading && <p>Loading...</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="login-button">
          <button type="submit">Login</button>
          <button type="reset" onClick={handleCancel}>
            Cancel
          </button>
        </div>

        <div className="account-container">
          <p>
            Don't you have an account?{" "}
            <span>
              <u> Sign In </u>
            </span>
          </p>
        </div>
      </form>

      {/* {data && <p>Login Successful</p>} */}
    </div>
  );
};

export default LoginComponent;
