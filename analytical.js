// Vehicle Count Over Time
const ctxVehicle = document.getElementById("vehicleChart").getContext("2d");
const vehicleChart = new Chart(ctxVehicle, {
  type: "line",
  data: {
    labels: [
      "00:00",
      "03:00",
      "06:00",
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00",
      "24:00",
    ],
    datasets: [
      {
        label: "Vehicle Count",
        data: [80, 160, 220, 180, 140, 200, 250, 210, 180],
        borderColor: "#4FC3F7",
        backgroundColor: "rgba(79,195,247,0.2)",
        pointBackgroundColor: "#4FC3F7",
        pointBorderColor: "#fff",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        grid: { color: "#3a3f55" },
        ticks: { color: "#e0e0e0" },
      },
      y: {
        grid: { color: "#3a3f55" },
        ticks: { color: "#e0e0e0" },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

// Signal Timing Distribution
const ctxSignal = document.getElementById("signalChart").getContext("2d");
const signalChart = new Chart(ctxSignal, {
  type: "doughnut",
  data: {
    labels: ["Green", "Yellow", "Red"],
    datasets: [
      {
        label: "Signal Timing",
        data: [60, 10, 30],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
        borderColor: "#2a2e43",
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#e0e0e0" },
      },
    },
  },
});