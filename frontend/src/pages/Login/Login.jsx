import React, { useState } from "react";
import Navbar from "../../componenets/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../componenets/input/PasswordInput";
import { validateEmail } from "../../utils/util";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setError(null);
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className=" w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="email"
              placeholder="email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>} 
            
            <button type="submit" className="btn-primary">
              Login
            </button>

            <p className="text-sm mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className=" font-medium text-primary underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
