import React from "react";

function ClinicCard({ clinic }) {
  return (
    <div className=" items-center flex gap-6 p-4">
      <div>
        <img className="max-w-40 rounded-md " src="clinic.png" alt="" />
      </div>
      <div>
        <h1 className="text-2xl text-blue-500">{clinic.name}</h1>
        <p className="text-sm text-slate-600">Location : {clinic.location}</p>
        <div>
          <span className="text-sm text-slate-600">{clinic.specialization}</span>
          <span className="text-sm text-slate-600">{clinic.contact}</span>
        </div>
        <button className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-xs text-white">
          View Detials
        </button>
      </div>
    </div>
  );
}

export default ClinicCard;
