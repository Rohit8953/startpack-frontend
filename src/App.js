import React from "react";
import Navbar from "./Mainpage/Navbar";
import Home from "./Mainpage/Home";
import { Routes, Route } from "react-router-dom";
import Medicalstore from "./Routerscompo/Medicalstore";
import Testcard from "./Testandsurgery/Testcard";
import Surgeryform from "./Testandsurgery/Surgeryform";
import DoctorList from "./DoctorPage/page";
import DoctorProfile from "./DoctorPage/DoctorProfile";
import ClinicDetails from "./DoctorPage/ClinicDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="store" element={<Medicalstore />} />
        <Route path="test" element={<Testcard />} />
        <Route path="surgery" element={<Surgeryform />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="doctors/:id" element={<DoctorProfile />} />
        <Route path="clinics/:id" element={<ClinicDetails />} />
      </Routes>
    </div>
  );
}
export default App;
