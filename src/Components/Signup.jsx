import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showEye, setShowEye] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const check=e.target.terms.checked
    console.log(email, password,check);
    setSuccess(false);
    setError("");
    if(!check){
        return setError('please accepts our terms and conditions')
    }
    if (password.length < 6) {
      return setError("Password must be more than 6 character");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must be lowerCase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("Password must be UpperCase letter");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return setError("Password must be special letter");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto mt-5 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Signup now!</h1>

        <form onSubmit={handleSubmitForm} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showEye ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
            />
            <button
              onClick={() => setShowEye(!showEye)}
              className="absolute top-2 right-6"
            >
              {showEye ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <label className="label">
            <input type="checkbox" name="terms" className="checkbox" />
            Accept terms and conditions
          </label>
          <button type="submit" className="btn btn-neutral mt-4">
            SignUp
          </button>
        </form>
        <p>Already have an account please <Link className="underline text-green-600" to='/login'>Login</Link></p>
        <p className="text-red-500">{error}</p>
        {success && (
          <p className="text-green-600">Created account successfully</p>
        )}
      </div>
    </div>
  );
};

export default Signup;
