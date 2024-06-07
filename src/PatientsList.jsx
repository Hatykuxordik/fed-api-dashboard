import { useState } from "react";

function PatientsList({ data, error, handlePatientClick, selectedPatient }) {
  const [, setActivePatient] = useState(selectedPatient);

  const handlePatientSelection = (patient) => {
    setActivePatient(patient);
    handlePatientClick(patient);
  };

  return (
    <aside className=" bg-white rounded-2xl shadow-md mt-2 row-span-4 overflow-hidden">
      <div className="flex justify-between p-4 items-center">
        <h2 className="text-xl font-bold mb-4">Patients</h2>
        <img src="search.svg" alt="Search" className="h-4 w-4 cursor-pointer" />
      </div>
      <ul className="h-[88%] pr-2 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-200">
        {data ? (
          data.map((patient) => (
            <li
              className={`flex pl-6 py-4 items-center justify-between cursor-pointer ${
                selectedPatient &&
                selectedPatient.date_of_birth === patient.date_of_birth
                  ? "bg-[#01F0D0] "
                  : ""
              }`}
              key={patient.date_of_birth}
              onClick={() => handlePatientSelection(patient)}
            >
              <div className="flex items-center space-x-2">
                <img
                  src={patient.profile_picture}
                  alt={patient.name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm text-[#072635]">
                    {patient.name}
                  </p>
                  <p className="text-sm text-[#707070]">
                    {`${patient.gender}, ${patient.age}`}
                  </p>
                </div>
              </div>
              <button className="text-[#072635]">
                <img
                  src="more-hor.svg"
                  className="h-4 w-4 mr-4"
                  alt="More options"
                />
              </button>
            </li>
          ))
        ) : (
          <li className="text-sm text-red-500">{error}</li>
        )}
      </ul>
    </aside>
  );
}

export default PatientsList;
