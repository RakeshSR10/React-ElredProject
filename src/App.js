// import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditBio from "./Components/EditBio";
import MyBio from "./Components/MyBio";
import ResumeData from "./Components/ResumeData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyBio />} />
        <Route path="/editbio" element={<EditBio />} />
        <Route path="/resumedata" element={<ResumeData />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
