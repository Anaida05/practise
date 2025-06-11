import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [5, 9, 7, 8, 6, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ width: '600px', margin: 'auto', padding: '20px' }}>
      <h3>Monthly Task Completion</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
