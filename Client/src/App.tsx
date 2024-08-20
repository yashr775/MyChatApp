import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));

const App = () => {
  return (
    <div>
      <Router>
        <span>Header</span>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="chat/:chatId" element={<Chat />} />
          <Route path="login" element={<Group />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
