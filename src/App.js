import "./App.css";
import React from "react";
import Home from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Features from "./Components/Features";
import DiscriptionPage1 from "./Components/DiscriptionPage1";
import DiscriptionPage2 from "./Components/DiscriptionPage2";
import Users from "./Components/Users";
import Footer from "./Components/Footer";
import Community from "./Components/Community";
import AppPage from "./Components/AppPage";
import PricingPage from "./Components/PricingPage";
import SignInPage from "./Components/SignInPage";
import TryItFreePage from "./Components/TryItFreePage";
import Path from "./Components/Path";
import SignUpPage from "./Components/SignUpPage";
import AndManyMorePage from "./Components/AndManyMorePage";
import ResisterBox from "./Components/ResisterBox"
import ChatPage from "./Components/ChatPage";
import MeetAnExpert from './Components/MeetAnExpert';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Path />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/features" element={<Features />} />
          <Route path="/discriptionPage1" element={<DiscriptionPage1 />} />
          <Route path="/discriptionPage2" element={<DiscriptionPage2 />} />
          <Route path="/users" element={<Users />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/community" element={<Community />} />
          <Route path="/appPage" element={<AppPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/tryFreePage" element={<TryItFreePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/andmanymore" element={<AndManyMorePage />} />
    <Route path="/resister" element={ <ResisterBox/>} />
     <Route path="/chat" element={<ChatPage/>} />
    <Route path="/meetexpert" element={<MeetAnExpert/>} />
         </Routes>
      </div>
    </Router>
  
   
  );
}

export default App;
