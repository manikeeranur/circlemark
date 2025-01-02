import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@assets/styles/main.scss";
import AdminPage from "@components/AdminPage";
import DealerPage from "@components/DealerPage";
import Home from "@components/Home";
import ProtectedRoute from "@components/ProtectedRoute";
import SignIn from "@components/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dealer"
          element={
            <ProtectedRoute role={2}>
              <DealerPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role={1}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
