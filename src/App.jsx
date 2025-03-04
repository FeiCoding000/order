import { useState } from "react";
import "./App.css";
import { Menu } from "./pages/menu";
import { Login } from "./pages/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DataPage } from "./pages/dataPage";
import { MainLayout } from "./components/mainlayout";
import { NewsPage } from "./pages/newsPage";
import { FeedbackPage } from "./pages/feedbackPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route key="login" path="/login" element={<Login />} />
          <Route key="home" path="/" element={<MainLayout />}>
            <Route path="/data" element={<DataPage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
