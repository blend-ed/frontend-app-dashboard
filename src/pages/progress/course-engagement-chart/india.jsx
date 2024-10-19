import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import placeholderData from './dummyData';

const colors = ['--primary', '--warning', '--pink', '--success', '--info', '--danger', '--secondary', '--yellow', '--purple'];

function CourseEngagementChart() {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const [chartData, setChartData] = useState(placeholderData);

    useEffect(() => {
        // this is where the real data will be loaded
        const fetchData = async () => {
            // fetch data here
            const fetchedData = placeholderData;
            const labels = fetchedData.labels;
            const datasets = fetchedData.datasets.map((dataset, index) => {
                return {
                    ...dataset,
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue(colors[index]),
                    barThickness: 32,
                };
            });

            console.log('labels', datasets);
            setChartData({
                labels,
                datasets,
            });
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log('chartData', chartData);
    }, [chartData]);


    const options = {
        plugins: {
            title: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                position: "bottom",
                labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    useBorderRadius: true,
                    borderRadius: 2,
                    padding: 24,
                },
            },
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 5 / 1,
        scales: {
            x: {
                beginAtZero: true,
                stacked: true,
                border: {
                    display: false,
                },
                grid: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                },
                border: {
                    display: false,
                    dash: [4, 4],
                },
                grid: {
                    tickBorderDash: [4, 4],
                    borderDash: [5, 5], // Make horizontal grid lines dotted
                },
            },
        },
    };

    return (

        <div className='engagement-chart__card'>
            <div className="engagement-chart__header">
                <div className="engagement-chart__left">
                    <div className="engagement-chart__title">Course Engagement</div>
                </div>
                <div className="engagement-chart__right">

                </div>
            </div>
            <div className='engagement-chart-container'>
                <Bar data={chartData} options={options} />
            </div>
        </div>

    )
}

export default CourseEngagementChart