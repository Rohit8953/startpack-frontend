import React from "react";

function DoctorCard({ doctor }) {
  return (
    <div className="items-center flex gap-4 p-4">
      <div>
        <img
          className="w-40 h-40 rounded-full object-cover"
        src="profile.png"
        />
      </div>
      <div>
        <h1 className="text-2xl text-blue-500">{doctor.user.username}</h1>
        {doctor.experience && (
          <p className="text-sm text-slate-600">{doctor.experience} years of overall experience</p>
        )}
        {doctor.location && <p className="text-sm text-slate-600">Location : {doctor.location}</p>}

        <div>
          <span className="text-sm text-slate-600">{doctor.specialization.name}</span>

          <span> . </span>
          {doctor.hospital && (
            <span className="text-sm text-slate-600">{doctor.hospital.name}</span>
          )}
          {doctor.clinic && <span className="text-sm text-slate-600">{doctor.clinic.name}</span>}
        </div>
        <button className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-xs text-white">
          View Detials
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
