import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import DoughnutChart from './DoughnutChart';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = () => {
    const dataCharts = {
        labels: ['Jan', '', 'Mar', '', 'May', '', 'Jul', '', 'Sep', '', 'Nov', ''],
        datasets: [
            {
                label: 'Earnings',
                data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
                fill: true,
                borderColor: '#4e73df',
                tension: 0.4,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 40000,
                ticks: {
                    stepSize: 10000,
                    callback: function (value) {
                        return `$${value}`;
                    },
                },
            },
        },
    };
    return (
        <div className='row mt-4 m-3 justify-content-between'>
            <div className='col-sm-8 '>
                <div className='card shadow'>
                    <div className='card-header py-3 d-flex align-items-center justify-content-between'>
                        <h6 className='text-primary fw-bold m-0'>Earnings Overview</h6>
                        <i className='fas fa-ellipsis-v fa-sm fa-fw'></i>
                    </div>
                    <div className='card-body'>
                        <div className='chart-area'>
                            <Line data={dataCharts} options={options} width={400} height={400} />
                        </div>
                    </div>
                </div>


            </div>
            <div className='col-sm-4'>
                <DoughnutChart />
            </div>
        </div>
    )
}

export default Charts