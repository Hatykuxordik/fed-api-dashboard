import DiagnosisHistory from "./DiagnosisHistory";
import DiagnosticList from "./DiagnosticList";

function PatientDetails({ selectedPatient }) {
  const { diagnosis_history, diagnostic_list } = selectedPatient || {};

  return (
    <div className="flex flex-col gap-6 col-span-2 row-span-4">
      <DiagnosisHistory diagnosisHistory={diagnosis_history} />
      <DiagnosticList diagnosticList={diagnostic_list} />
    </div>
  );
}

export default PatientDetails;
