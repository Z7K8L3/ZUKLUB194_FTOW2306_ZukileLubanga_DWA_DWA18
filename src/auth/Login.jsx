import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const Login = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      
      
      if (error) throw error;
      console.log(data);
      navigate("/homepage");

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        
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
          className="form-btn">
          Login
        </button>
      </form>
      Don't have an account?{" "}
      <Link to="/signup" className="form-link">
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
