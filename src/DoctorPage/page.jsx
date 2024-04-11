import axios, { spread } from "axios";
import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";
import ClinicCard from "./ClinicCard";

function DoctorList() {
  const [query, setQuery] = useState({
    name: "",
    location: "",
    specialization: "",
    rating: "",
    experience: "",
    gender:""
  });
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [specializationOptions, setSpecializationOptions] = useState([]);
  const [category, setCategory] = useState("doctor");
  const [ratingOptions, setRatingOptions] = useState([1, 2, 3, 4, 5]);

  function clearQuery() {
    setQuery({
      name: "",
      location: "",
      specialization: "",
      rating: "",
      experience: "",
      gender: "",
    });
  }

  useEffect(() => {
    async function fetchDoctors() {
      const queryParams = new URLSearchParams();

      // Append query parameters
      if (query.name.length !== 0) {
        queryParams.append("name", query.name);
      }

      if (query.location.length !== 0) {
        queryParams.append("location", query.location);
      }

      if (query.specialization.length !== 0) {
        queryParams.append("specializationId", query.specialization);
      }

      if (query.experience.length !== 0) {
        queryParams.append("experience", query.experience);
      }
      if (query.rating.length !== 0) {
        queryParams.append("rating", query.rating);
      }
      if (query.gender.length !== 0) {
        queryParams.append("gender", query.gender);
      }

      const doctorUrl = `http://localhost:5000/api/doctors/?${queryParams.toString()}`;
      const clinicUrl = `http://localhost:5000/api/clinics/?${queryParams.toString()}`;
      const specializationUrl = `http://localhost:5000/api/specializations`;

      try {
        const doctorList = await axios.get(doctorUrl);
        const clinicList = await axios.get(clinicUrl);
        const specializationData = await axios.get(specializationUrl);
        setDoctors(doctorList.data.data);
        setClinics(clinicList.data.data);
        setSpecializationOptions(specializationData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDoctors();
  }, [query]);

  //   const handleSpecializationChange = e => {};
  return (
    <div>
      <div className="p-10">
        <div action="" className="flex items-center gap-2">
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-sm">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="rounded-md border px-2 py-2 text-slate-600 focus:outline-none"
            >
              <option value="">Select Rating</option>
              <option value="doctor">Doctor</option>
              <option value="clinic">Clinic</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="locatoin" className="text-sm">
              Location
            </label>
            <input
              type="text"
              name="locatoin"
              value={query.location || ""}
              onChange={e => setQuery({ ...query, location: e.target.value })}
              className="w-40 rounded-md border px-2 py-2 text-slate-600 placeholder:text-sm focus-within:outline-none"
              placeholder="E.g. Kanpur"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              type="text"
              className="rounded-md border px-2 py-2 text-slate-600 placeholder:text-sm focus-within:outline-none"
              value={query.name || ""}
              onChange={e => setQuery({ ...query, name: e.target.value })}
              placeholder="E.g. Dr. Amit Niranjan"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="specialization" className="text-sm">
              Specialization
            </label>
            <select
              id="specialization"
              value={query.specialization}
              onChange={e => setQuery({ ...query, specialization: e.target.value })}
              className="rounded-md border px-2 py-2 text-slate-600 focus:outline-none"
            >
              <option value="">Select Specialization</option>
              {specializationOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-sm">
              Rating
            </label>
            <select
              id="rating"
              value={query.rating}
              onChange={e => setQuery({ ...query, rating: e.target.value })}
              className="rounded-md border px-2 py-2 text-slate-600 focus:outline-none"
            >
              <option value="">Select Rating</option>
              {ratingOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-sm">
              Experience
            </label>
            <select
              id="experience"
              value={query.experience}
              onChange={e => setQuery({ ...query, experience: e.target.value })}
              className="rounded-md border px-2 py-2 text-slate-600 focus:outline-none"
            >
              <option value="">Experience</option>
              <option value="5">+5 </option>
              <option value="10">+10</option>
              <option value="15">+15</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="text-sm">
              Gender
            </label>
            <select
              id="gender"
              value={query.gender}
              onChange={e => setQuery({ ...query, gender: e.target.value })}
              className="rounded-md border px-2 py-2 text-slate-600 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white mt-4">
            Clear
          </button>
        </div>
        <div className="flex items-center gap-2 mt-4"></div>
      </div>
      <div className="flex flex-col gap-4 divide-y divide-dashed">
        {category === "doctor" &&
          doctors.map(doctor => (
            <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </Link>
          ))}
        {category === "clinic" &&
          clinics.map(clinic => (
            <Link to={`/clinics/${clinic.id}`} key={clinic.id}>
              <ClinicCard clinic={clinic} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default DoctorList;
