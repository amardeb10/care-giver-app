import { Route, Routes } from "react-router";
import { auth } from "./firebase";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Activity from "./component/Activity";
import Welcome from "./component/Welcome";
import Dashboard from "./component/dashboard/Dashboard";
import LandingPage from "./LandingPage";
import ChatBox from "./component/ChatBox";

export default function App() {
  // const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/chat" element={<ChatBox />}></Route>
        <Route path="/sign-in" element={<Welcome />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      {/* </>
      )} */}
    </div>
  );
}
