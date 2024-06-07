import { Line } from "react-chartjs-2";
import configureChartData from "./configureChartData";
import DiagnosisDetail from "./DiagnosisDetail";
import DiagnosisCard from "./DiagnosisCard";

const DiagnosisHistory = ({ diagnosisHistory }) => {
  const firstDiagnosis = diagnosisHistory?.[0] || {};
  const { systolic, diastolic } = firstDiagnosis?.blood_pressure || {};
  const respiratoryRate = firstDiagnosis?.respiratory_rate || {};
  const temperature = firstDiagnosis?.temperature || {};
  const heartRate = firstDiagnosis?.heart_rate || {};

  const data = configureChartData(diagnosisHistory);

  return (
    <section className="bg-white p-4 rounded-2xl shadow-md mt-2 h-2/3">
      <h2 className="text-2xl font-semibold mb-2 text-black">
        Diagnosis History
      </h2>
      <div className="flex h-[53%] gap-6 justify-between bg-purple-50 p-2 rounded-lg mb-4">
        <div className="flex flex-col basis-2/3">
          <div className="flex justify-between mb-1">
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
          <Line data={data} />
        </div>

        <div className="flex flex-col gap-3 basis-1/3">
          <DiagnosisDetail
            title="Systolic"
            value={`${systolic?.value || "N/A"}`}
            level={systolic?.levels}
            border={"b"}
            dotColor="bg-[#E66FD2]"
          />
          <DiagnosisDetail
            title="Diastolic"
            value={`${diastolic?.value || "N/A"}`}
            level={diastolic?.levels}
            border={"b-0"}
            dotColor="bg-[#7E6CAB]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <DiagnosisCard
          icon="respiratoryrate.svg"
          title="Respiratory Rate"
          value={`${respiratoryRate?.value || "N/A"} bpm`}
          level={respiratoryRate?.levels}
          levelColor="blue"
        />
        <DiagnosisCard
          icon="temperature.svg"
          title="Temperature"
          value={`${temperature?.value || "N/A"}°F`}
          level={temperature?.levels}
          levelColor="red"
        />
        <DiagnosisCard
          icon="heartbpm.svg"
          title="Heart Rate"
          value={`${heartRate?.value || "N/A"} bpm`}
          level={heartRate?.levels}
          levelColor="pink"
        />
      </div>
    </section>
  );
};

export default DiagnosisHistory;
