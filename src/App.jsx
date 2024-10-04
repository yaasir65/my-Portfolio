// import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/footer";

 function App (){
     return <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='footer/' element={<Footer/>} />
     

        {/* <Route path='/Header' element={<Header/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} /> */}


     </Routes>
    
 }

 export default App