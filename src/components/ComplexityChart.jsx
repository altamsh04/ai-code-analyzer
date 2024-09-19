import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const complexityLevels = ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n^2)', 'O(2^n)'];

const ComplexityChart = ({ complexity, title }) => {
  function parseComplexity(complexity) {
    switch (complexity) {
      case 'O(1)': 
        return 0;
      case 'O(log n)': 
      case 'O(LOG N)': 
        return 1;
      case 'O(n)': 
      case 'O(N)': 
      case 'O(W)': 
      case 'O(T)':
      case 'O(t)':
        return 2;
      case 'O(n log n)': 
      case 'O(N LOG N)':
        return 3;
      case 'O(n^2)': 
      case 'O(N^2)':
        return 4;
      case 'O(2^n)': 
      case 'O(2^N)': 
        return 5;
      default: 
        return 0;
    }
    
  }

  const complexityValue = parseComplexity(complexity);

  const labels = complexityLevels;
  const datapoints = [0, 0, 0, 0, 0, 0];
  datapoints[complexityValue] = 1;

  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: datapoints,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${title} - Interpolation Mode`
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Complexity Levels'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: 0,
        suggestedMax: 1,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-100">
      <Line data={data} options={options} />
    </div>
  );
};

export default ComplexityChart;
