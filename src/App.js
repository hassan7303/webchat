import Login from "./component/login/login";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./component/signup/SignUp";
import UiChat from "./component/ChatPage/UiChat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatPage" element={<UiChat />} />
        <Route path="*" element={<h1>this page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
