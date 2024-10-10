import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Filler);
const dataDoughnut = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
        {
            data: [300, 150, 100],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'], // Renkleri grafikteki gibi ayarla
            hoverOffset: 4,
        },
    ],
};

const options = {
    cutout: '80%', // Donut grafik genişliği
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                usePointStyle: true, // Etiketlerin nokta stili
                color: '#666666', // Etiket rengi
            },
        },
    },
};

const DoughnutChart = () => {
    return (
        <div className='card shadow'>
            <div className='card-header py-3 d-flex align-items-center justify-content-between'>
                <h6 className='text-primary fw-bold m-0'>Revenue Sources</h6>
                <i className='fas fa-ellipsis-v fa-sm fa-fw'></i>
            </div>
            <div className='card-body' >
                <Doughnut data={dataDoughnut} options={options} />
            </div>
        </div>
    )
}

export default DoughnutChart