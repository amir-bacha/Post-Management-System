import axios from 'axios'
import { useState } from "react";
 const  Signup=() =>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
   setFormData({
    ...formData,
    [e.target.name]:e.target.value
   });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
   
    try {
      const response=await axios.post(
        " http://localhost:5000/api/user/register", formData
      );
      
      console.log(response);
      alert("User created");
       setFormData({
      name:"",
      email:"",
      password:"",
    })
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-500 mt-2">
            Sign up to get started
          </p>
        </div>

        <form

         onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              required
            />
          </div>
          <label  className=" block text-sm font-medium text-gray-700 mb-2" >Email: </label>
          <input
           type="email" 
           name="email"
           value={formData.email}
           onChange={handleChange}
           className="w-full rounded-lg border border-gray-300 px-4 py-3  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition "
           placeholder="abcd@gmail.com"
           />
           <label  className=" block text-sm font-medium text-gray-700 mb-2" >password </label>
           <input
           type="password" 
           name="password"
           value={formData.password}
            onChange={handleChange}

           className="w-full rounded-lg border border-gray-300 px-4 py-3  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition "
           placeholder=""
           />
          
          <button
            type="submit"
        
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:text-indigo-700"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
export default Signup;