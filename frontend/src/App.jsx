
import {  Route, Routes } from 'react-router-dom';
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Login from './Components/Login';
const App=()=>{
  return (
      <>
 
    <div className=" bg-mist-300">

    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Signup />} />
        <Route path='/login' element={<Login />} />
     </Routes>
    </div>
   
    </>
  )
}
export default App;