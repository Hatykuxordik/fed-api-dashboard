import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function configureChartData(diagnosisHistory) {
  const labels = diagnosisHistory
    ?.slice(0, 6)
    .map((history) => [`${history.month.slice(0, 3)}, ${history.year}`])
    .reverse();

  const systolic = diagnosisHistory
    ?.slice(0, 6)
    .map((history) => history.blood_pressure.systolic.value)
    .reverse();

  const diastolic = diagnosisHistory
    ?.slice(0, 6)
    .map((history) => history.blood_pressure.diastolic.value)
    .reverse();

  return {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        backgroundColor: "#E66FD2",
        borderColor: "#E66FD2",
        data: systolic,
        tension: 0.4,
      },
      {
        label: "Diastolic",
        backgroundColor: "#7E6CAB",
        borderColor: "#7E6CAB",
        data: diastolic,
        tension: 0.4,
      },
    ],
  };
}

export default configureChartData;
