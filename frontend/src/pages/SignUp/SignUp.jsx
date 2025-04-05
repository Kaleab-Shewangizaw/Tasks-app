import React, { useState } from "react";
import Navbar from "../../componenets/Navbar";
import PasswordInput from "../../componenets/input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/util";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || ! email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setError(null);
    // Handle sign up logic here
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className=" w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign Up</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="btn-primary">
              Create an account
            </button>

            <p className="text-sm mt-4">
              Aready have an account?{" "}
              < Link
                to="/login"
                className=" font-medium text-primary underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
