import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const DataVisualizer = ({ data }) => {
  if (data.length === 0) {
    return <p>No data to display</p>;
  }

  const chartData = {
    labels: data.map((_, index) => index),
    datasets: [
      {
        label: 'Real-Time Data',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Real-Time Data Visualization</h2>
      <Line data={chartData} />
    </div>
  );
};

export default DataVisualizer;