import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import PatientsList from "./PatientsList";
import PatientDetails from "./PatientDetails";
import PatientProfile from "./PatientProfile";
import LabResults from "./LabResults";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const username = "coalition";
    const password = "skills-test";
    const auth = btoa(`${username}:${password}`);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Authentication failed");
        }

        const data = await response.json();
        setData(data);
        if (data.length > 0) {
          setSelectedPatient(data[3]); // Set the first patient as default
        }
      } catch (error) {
        setError("Authentication failed");
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="p-4 bg-[#F6F7F8] text-black">
      <NavBar />

      <div className="h-screen grid grid-cols-4 grid-rows-4 gap-6">
        <PatientsList
          data={data}
          error={error}
          selectedPatient={selectedPatient}
          handlePatientClick={setSelectedPatient}
        />

        <PatientDetails selectedPatient={selectedPatient} />

        <PatientProfile selectedPatient={selectedPatient} />

        <LabResults labResults={selectedPatient?.lab_results} />
      </div>
    </main>
  );
}

export default App;
