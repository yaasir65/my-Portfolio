// import React from 'react'
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from  './components/Footer'
import Contact from "./pages/Contact";

 function App (){
     return <Routes>
        <Route path='/' element={<Header/>} />
        {/* <Route path='/contact' element={<Contact/>} />  */}
        <Route path='/footer' element={<Footer/>} />
     

       {/* <Route path='/Header' element={<Header/>} />
        <Route path='/about' element={<About/>} /> */}


     </Routes>
    
 }

 export default App