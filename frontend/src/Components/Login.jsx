import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
  const  Login=()=>{ 
  const [err,setErr]=useState("");
  const [showMessage,setShowMessage]=useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  
  };
  const Validation=()=>{
    if(formData.email===""){
        setErr("this is field must be required");
      }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   Validation();
   try {
     const response=await axios.post(
      "http://localhost:5000/api/user/login",formData,
      { withCredentials:true }
     )
         console.log(response)
         console.log(response.message);
         setFormData({
          email:"",
          password:"",
         })
         setShowMessage(true);
         setTimeout(() => {
          setShowMessage(false)
         }, 4000);
   } catch (error) {
    console.log(error);
   }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-gray-500 mt-2">
              Login in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"

              />
              <div className="text-red-600"> {err}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>
          </form>
              {showMessage && (
                <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              <h3>Login successful</h3> 
              </div>
              )}


          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/sign"
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;