import { Route, Routes } from "react-router";
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Chat from "./component/ChatBox";
import Activity from "./component/Activity";
import Logout from "./component/Logout";
import LandingPage from "./LandingPage";
import Login from "./component/Login";
import SignUp from "./component/signup/signup";
import Welcome from "./component/Welcome";

export default function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {!user ? (
        <Welcome />
      ) : (
        <>
          <Navbar />
      <Routes>
      <Route path="/" element={<LandingPage />}></Route>

      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>


        <Route path="/chat" element={<Chat />}></Route>
        {/* <Route path="/logout" element={<Logout />}></Route> */}
      </Routes>
        </>
      )}

    </div>
  );
}
