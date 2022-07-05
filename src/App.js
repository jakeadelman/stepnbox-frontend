import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Create from "./components/create";
import "./styles.scss";
 
const App = () => {
 return (
   <div>
      
     <Routes>
       <Route exact path="/" element={<Create />} />
       <Route path="/create" element={<Create />} />
     </Routes>
    
   </div>
 );
};
 
export default App;