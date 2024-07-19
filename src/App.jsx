import { Route, Routes } from "react-router";
//import {auth} from "./firebase";


import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Chat from "./component/ChatBox";
import Activity from "./component/Activity";
import Welcome from "./component/Welcome";
import LandingPage from "./LandingPage";
//import Login from "./component/Login";
import SignUp from "./component/signup/signup";
import Dashboard from "./component/dashboard/Dashboard";

export default function App() {
  
  return (
    <div className="App">
      
          {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        
        {/* <Route path="/logout" element={<Logout />}></Route> */}
        <Route path="/sign-in" element={<Welcome />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
        {/* </>
      )} */}
      
    </div>
  );
}
