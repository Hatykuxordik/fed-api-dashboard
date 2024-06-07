import { useState } from "react";

function PatientProfile({ selectedPatient }) {
  return (
    <section className="bg-white p-4 rounded-2xl shadow-md row-span-3">
      <div className="flex flex-col items-center px-4 pt-4 pb-2">
        <img
          className="w-44 h-44 rounded-full"
          src={selectedPatient?.profile_picture}
          alt="Profile Picture"
        />
        <h2 className="mt-4 text-xl font-semibold text-black ">
          {selectedPatient?.name}
        </h2>
      </div>
      <div className="px-6 py-3">
        <div className="flex items-center mb-3">
          <img alt="calendar" src="birthicon.svg" className="w-6 h-6 mr-3" />
          <div>
            <p className="text-xs text-[#072635]">Date Of Birth</p>
            <p className="text-xs font-bold text-[#072635] ">
              {selectedPatient?.date_of_birth}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img alt="gender" src="gendericon.svg" className="w-6 h-6 mr-3" />
          <div>
            <p className="text-xs text-[#072635]">{selectedPatient?.gender}</p>
            <p className="text-xs font-bold text-[#072635] ">Female</p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img
            alt="phone"
            src="phoneicon.svg"
            className="w-6 h-6 text-[#072635] mr-3"
          />
          <div>
            <p className="text-xs text-[#072635] ">Contact Info.</p>
            <p className="text-xs font-bold text-[#072635] ">
              {selectedPatient?.phone_number}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img
            alt="phone"
            src="phoneicon.svg"
            className="w-6 h-6 text-[#072635] mr-3"
          />
          <div>
            <p className="text-xs text-[#072635]">Emergency Contacts</p>
            <p className="text-xs font-bold text-[#072635] ">
              {selectedPatient?.emergency_contact}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img
            alt="insurance"
            src="insuranceicon.svg"
            className="w-6 h-6 mr-3"
          />
          <div>
            <p className="text-xs text-[#072635] ">Insurance Provider</p>
            <p className="text-xs font-semibold text-[#072635] ">
              {selectedPatient?.insurance_type}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-0">
        <button className="w-full bg-teal-500 text-white py-2 rounded-full hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          Show All Information
        </button>
      </div>
    </section>
  );
}

export default PatientProfile;
