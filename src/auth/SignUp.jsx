import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Fullname"
          name="fullName" 
          onChange={handleChange} />
        
        <input 
          placeholder="Email" 
          name="email" 
          onChange={handleChange} />
        
        <input
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />
        
        <button 
          type="submit" 
          className="form-btn"
        >
          Submit
        </button>
      
      </form>
      Already have an account?{" "}
      <Link to="/" className="form-link">
        Login
      </Link>
    </div>
  );
};

export default SignUp;
