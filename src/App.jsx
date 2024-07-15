import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import Activity from "./component/Activity";
import Logout from "./component/Logout";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
}
