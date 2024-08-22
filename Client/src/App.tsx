import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const NotFound = lazy(() => import("./pages/NotFound"));

const user = true;

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<ProtectRoute user={user} children={undefined} />}>
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Group />} />
            <Route path="/chat/:chatId" element={<Chat />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                {" "}
                <Login />{" "}
              </ProtectRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
