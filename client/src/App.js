import './App.css';
import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie, Radar, Doughnut, PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);


function App() {
  const [Intensity, setIntensity] = useState([]);
  const [Likelihood, setLikelihood] = useState([]);
  const [Relevance, setRelevance] = useState([]);
  const [Country, setCountry] = useState([]);
  const [Topics, setTopics] = useState([]);
  const [Region, setRegion] = useState([]);

  async function callme() {
    const result = await axios.get(`http://localhost:8000`);

    setIntensity(result.data.map(e => e.intensity));
    setLikelihood(result.data.map(e => e.likelihood));
    setRelevance(result.data.map(e => e.relevance));
    setCountry(result.data.map(e => e.country));
    setTopics(result.data.map(e => e.topic));
    setRegion(result.data.map(e => e.region));
  }

  useEffect(() => {
    callme();
  }, []);

  // =====================================================================================

  const bardata = {
    labels: Country,
    datasets: [
      {
        label: 'Intensity by country',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Intensity
      }
    ]
  };

  const baroptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // =====================================================================================

  const linedata = {
    labels: Region,
    datasets: [
      {
        label: 'Intensity by region',
        backgroundColor: 'green',
        borderColor: 'green',
        fill: false,
        lineTension: 0.1,
        data: Intensity
      }
    ]
  };

  const lineoptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // =====================================================================================

  const piedata = {
    labels: Topics,
    datasets: [
      {
        label: 'Intensity by Topic',
        backgroundColor: 'pink',
        borderColor: 'pink',
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(75,192,192,0.6)'],
        hoverBorderColor: ['rgba(75,192,192,1)'],
        data: Intensity
      }
    ]
  };

  const pieoptions = {
    maintainAspectRatio: false,
  };

  // =====================================================================================

  const doughnutdata = {
    labels: Country,
    datasets: [
      {
        label: 'Likelihood by Country',
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Likelihood
      }
    ]
  };

  const doughnutoptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // =====================================================================================

  const radardata = {
    labels: Country,
    datasets: [
      {
        label: 'Relevance by Country',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Relevance
      }
    ]
  };

  const radaroptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // =====================================================================================

  const polarareadata = {
    labels: Topics,
    datasets: [
      {
        label: 'Relevance by topic',
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: Relevance
      }
    ]
  };

  const polrareaoptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className='bar-graph'>
      <div className='bar-1'>
        <h1>Bar Chart for Intensity by country</h1>
        <Bar data={bardata} options={baroptions} />
      </div>

      <div className='bar-2'>
        <h1>Line Chart for Intensity by region</h1>
        <Line data={linedata} options={lineoptions} />
      </div>

      <div className='bar-3'>
        <h1>Pie Chart for Intensity by Topic</h1>
        <Pie data={piedata} options={pieoptions} />
      </div>

      <div className='bar-4'>
        <h1>Doughnut Chart for Likelihood by Country</h1>
        <Doughnut data={doughnutdata} options={doughnutoptions} />
      </div>

      <div className='bar-5'>
        <h1>Radar Chart for Relevance by Country</h1>
        <Radar data={radardata} options={radaroptions} />
      </div>

      <div className='bar-6'>
        <h1>PolarArea Chart for Relevance by topic</h1>
        <PolarArea data={polarareadata} options={polrareaoptions} />
      </div>
    </div>
  );
}

export default App;