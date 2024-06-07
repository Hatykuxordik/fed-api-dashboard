function DiagnosisHistory({ diagnosisHistory }) {
  console.log(diagnosisHistory);
  return (
    <section className="bg-white p-4 rounded-2xl shadow-md mt-2 h-2/3">
      <h2 className="text-2xl font-semibold mb-2 text-black">
        Diagnosis History
      </h2>
      <div className="flex h-[55%] gap-6 bg-purple-50 p-2 rounded-lg mb-4">
        <div className="flex justify-between basis-2/3 mb-4">
          <h3 className="text-lg font-medium text-black">Blood Pressure</h3>
          <div className="flex gap-2">
            <span className="text-[#072635]">Last 6 months</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.646"
              height="6"
              viewBox="0 0 10.646 6"
              className="mt-[0.6rem]"
            >
              <path
                id="expand_more_FILL0_wght300_GRAD0_opsz24"
                d="M271.741-608.384a.958.958,0,0,1-.335-.057.827.827,0,0,1-.3-.2l-4.478-4.479a.722.722,0,0,1-.212-.52.7.7,0,0,1,.212-.53.715.715,0,0,1,.525-.217.715.715,0,0,1,.525.217l4.059,4.059,4.059-4.059a.722.722,0,0,1,.52-.212.7.7,0,0,1,.53.212.715.715,0,0,1,.217.525.715.715,0,0,1-.217.525l-4.478,4.479a.826.826,0,0,1-.3.2A.958.958,0,0,1,271.741-608.384Z"
                transform="translate(-266.42 614.384)"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-1/3">
          <div className="pb-3 border-b border-[#CBC8D4]">
            <div className="flex items-center mb-1 ">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
              <span className="text-black font-semibold">Systolic</span>
            </div>
            <div className="text-2xl font-semibold text-black">160</div>
            <div className="text-xs text-[#072635]">
              <span>▲</span> Higher than Average
            </div>
          </div>
          <div>
            <div className="flex items-center mb-1">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
              <span className="text-black font-semibold">Diastolic</span>
            </div>
            <div className="text-2xl font-semibold text-black">78</div>
            <div className="text-xs text-[#072635]">
              <span>▼</span> Lower than Average
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <img
            src="respiratoryrate.svg"
            alt="Respiratory Rate"
            className="w-14 h-14 mx-auto mb-2"
          />
          <p className="text-[#072635]">Respiratory Rate</p>
          <div className="text-2xl font-bold text-black">20 bpm</div>
          <div className="text-sm text-[#072635]">Normal</div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg text-center">
          <img
            src="temperature.svg"
            alt="Temperature"
            className="w-14 h-14 mx-auto mb-2"
          />
          <p className="text-[#072635]">Temperature</p>
          <div className="text-2xl font-bold text-black">98.6°F</div>
          <div className="text-sm text-[#072635]">Normal</div>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg text-center">
          <img
            src="heartbpm.svg"
            alt="Heart Rate"
            className="w-14 h-14 mx-auto mb-2"
          />
          <p className="text-[#072635]">Heart Rate</p>
          <div className="text-2xl font-bold text-black">78 bpm</div>
          <div className="text-sm text-[#072635]">Lower than Average</div>
        </div>
      </div>
    </section>
  );
}

export default DiagnosisHistory;
