import { Route, Routes } from "react-router";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Activity from "./component/Activity";
import Logout from "./component/Logout";
import LandingPage from "./LandingPage";
import Login from "./component/Login";
import SignUp from "./component/signup/signup";
export default function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<LandingPage />}></Route>
        
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        
        
      </Routes>
    </div>
  );
}
