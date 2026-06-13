import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const PostForm=()=>{
  const [formData,setFormData]=useState({
    title:"",
    content:"",
  })
  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }));
  };
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formData);
    setFormData({
      title:"",
      content:"",
    })
  }
  return (
    <>
    <div className="flex items-center justify-center bg-gray-100 px-4">
      <form action=""
      onSubmit={submitHandler}
      className="w-full max-w-md bg-white p-6 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center"> Create Post </h2>
        <label className="block mb-2 font-medium ">Title</label>
        <input
         type="text"
         name="title"
         value={formData.title}
         onChange={changeHandler}
         placeholder="Post title"
         className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
         />
        <label className="block mb-2 font-medium ">Content</label>
        <textarea 
        name="content"
        value={formData.content}
        onChange={changeHandler}
        placeholder="Enter post content"
        className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
        </textarea>
        <button 
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >submit post</button>
      </form>
      <Link
       className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition" 
       to="/"> 
      <button>Home</button>
      </Link>
      
    </div>
    </>
  )
}
export default PostForm;