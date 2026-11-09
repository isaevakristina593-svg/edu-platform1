import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PartnersPage from "./pages/PartnersPage";
import AboutPage from "./pages/AboutPage";
import LecturersPage from "./pages/LecturersPage";
import LecturerDetailPage from "./pages/LecturerDetailPage";
import { lecturers } from "./data/data";
import "./styles/main.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedLecturerId, setSelectedLecturerId] = useState(null);

  const navigate = (key) => {
    setPage(key);
    setSelectedLecturerId(null);
    window.scrollTo(0, 0);
  };

  const openLecturer = (id) => {
    setSelectedLecturerId(id);
    setPage("lecturer-detail");
    window.scrollTo(0, 0);
  };

  const selectedLecturer = lecturers.find((l) => l.id === selectedLecturerId);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={navigate} />;
      case "partners": return <PartnersPage />;
      case "about": return <AboutPage />;
      case "lecturers": return <LecturersPage onOpenLecturer={openLecturer} />;
      case "lecturer-detail":
        return <LecturerDetailPage lecturer={selectedLecturer} onBack={() => navigate("lecturers")} />;
      default: return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={page} onNavigate={navigate} />
      {renderPage()}
      <Footer onNavigate={navigate} />
    </div>
  );
}