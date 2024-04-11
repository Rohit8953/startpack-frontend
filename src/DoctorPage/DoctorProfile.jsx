import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DoctorProfile() {
  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(doctor);

  useEffect(() => {
    async function fetchDoctors() {
      const url = `http://localhost:5000/api/doctors/${id}`;
      try {
        setLoading(true);

        const response = await axios.get(url);
        setDoctor(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    }
    fetchDoctors();
  }, []);

  if (loading) return <div>Loading....</div>;
  return (
    <>
      <div className="min-h-screen bg-slate-200">
        <div id="wrapper" className="p-10 ">
          <div className="flex gap-10">
            <div id="doctor-details" className="basis-2/3">
              <div id="doctor-profile" className="p-6 flex gap-4 bg-white rounded-md shadow-md">
                <img className="w-40 h-40 rounded-full object-cover" src="profile.png" />
                <div id="doctor-info">
                  <h2 className="text-3xl  text-violet-600 mb-4">{doctor.user.username}</h2>
                  <div className="text-sm text-slate-500 space-y-2">
                    {doctor.education && education.map((education, index) => <p>{education}</p>)}
                    <div>
                      {doctor.clinic ? (
                        <Link to={`/clinics/${doctor.clinic.id}`}>
                          <span>{doctor.clinic.name}</span>
                        </Link>
                      ) : (
                        <span>Not Available</span>
                      )}
                      <span> . </span>
                      <span>{doctor.specialization.name}</span>
                    </div>
                    <div>14+ years of experience overall</div>
                    <p className="line-clamp-2">
                      {`${doctor.user.username} is a Dental Surgeon in Vikas Nagar, Kanpur and has an
                      experience of 14 years in this field. Dr. Amit Mishra practices at Kanpur Oral
                      & Dental Care in Vikas Nagar, Kanpur. He completed BDS from Chhatrapati Shahu
                      Ji Maharaj University, Kanpur in 2010`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-md shadow-md mt-6">
                <div className="flex flex-1">
                  <div id="doctor-schedule" className="flex flex-col gap-4 text-slate-700 flex-1">
                    <span>Location : {doctor.location} </span>
                    {doctor.location && <span className="font-bold">{doctor.location}</span>}
                    {doctor.address && <span className="text-sm">{doctor.address}</span>}
                  </div>
                  <div className="flex flex-1 flex-col gap-4">
                    <span className="font-bold">Timing</span>
                    <div className="text-sm space-y-2">
                      {doctor.availability.map((item, index) => (
                        <div key={index}>
                          <p>{`${item[0]} ${item[1]} to ${item[2]}`}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="appointment-card"
              className="basis-1/3 bg-white rounded-md shadow-md overflow-hidden"
            >
              <div className="p-4 bg-violet-400 flex justify-between text-white">
                <h2 className=" text-white">Book an appointment</h2>
                <span>Fees $34.00</span>
              </div>
              <div className="flex justify-between mt-2">
                <div className="text-sm flex flex-col px-4 py-2 items-center hover:bg-violet-100">
                  <span>Today</span>
                  <span className="text-violet-700 text-xs">22 slots left</span>
                </div>
                <div className="text-sm flex flex-col px-4 py-2 items-center hover:bg-violet-100">
                  <span>Today</span>
                  <span className="text-violet-700 text-xs">22 slots left</span>
                </div>
                <div className="text-sm flex flex-col px-4 py-2 items-center hover:bg-violet-100">
                  <span>Today</span>
                  <span className="text-violet-700 text-xs">22 slots left</span>
                </div>
              </div>
              <hr />
              <div className="p-4 grid grid-cols-4 gap-4">
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
                <span className="px-2 py-1 border border-violet-500 text-violet-500 cursor-pointer hover:bg-violet-500 rounded-md tet-sm">
                  4:00 pm
                </span>
              </div>
              <div className="p-4">
                <button className="bg-violet-500 rounded-md w-full py-2 text-white">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
