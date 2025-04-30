import {  sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const emailRef= useRef()

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    setSuccess(false);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        if(!result.user.emailVerified){
            alert('please verified your email')
        }else{
            setSuccess(true);

        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleResetPassword=()=>{
   const email=emailRef.current.value
   setError('')
   sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('send your email password reset')
  })
  .catch((error) => {
 
    const errorMessage = error.message;
    setError(errorMessage)
    
    // ..
  });
  }
  return (
    <div className="card bg-base-100 w-full mx-auto mt-5 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SignIn now!</h1>

        <form onSubmit={handleSubmitForm} className="fieldset">
          <label className="label">Email</label>
          <input
            ref={emailRef}
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
            <div>
              <a onClick={handleResetPassword} className="link link-hover">Forgot password?</a>
            </div>
            <button
              onClick={() => setShowEye(!showEye)}
              className="absolute top-2 right-6"
            >
              {showEye ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            SignIn
          </button>
        </form>
        <p>
          New to the account please{" "}
          <Link className="underline text-green-600" to="/signup">
            SignUp
          </Link>
        </p>
        <p className="text-red-500">{error}</p>
        {success && (
          <p className="text-green-600">Login account successfully</p>
        )}
      </div>
    </div>  );
};

export default Login;
