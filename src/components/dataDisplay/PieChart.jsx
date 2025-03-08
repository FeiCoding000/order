import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// ✅ 必须注册 ChartJS 相关组件，否则不会生效
ChartJS.register(Title, Tooltip, Legend, ArcElement);

export const PieChart = ({ milkDetails = {} }) => {

    const labels = Object.keys(milkDetails || {});
    const values = Object.values(milkDetails || {});

    const backgroundColors = [
        'rgb(251, 255, 0)',
        'rgb(245, 255, 169)',
        'rgba(59, 78, 248, 0.5)',
        'rgba(32, 255, 255, 0.81)',
        'rgb(255, 14, 86)',
        'rgb(10, 7, 3)',
    ];

    const dynamicBackgroundColors = labels.map((_, index) => 
        backgroundColors[index % backgroundColors.length]
    );

    const data = {
        labels,
        datasets: [
            {
                data: values,
                backgroundColor: dynamicBackgroundColors,
            },
        ],
    };

    return (
        <div style={{ width: '580px', height: '580px' , display: 'flex',  alignItems: 'left'}}>
            <Pie 
                data={data} 
                options={{
                    plugins: {
                        legend: {
                            position: 'bottom', // ✅ 显示图例
                        },
                        tooltip: {
                            enabled: true, // ✅ 启用工具提示
                        },
                    },
                }} 
            />
            <div>{<h3 style={{textAlign:"left"}}>Milk details</h3>}{data.labels.map((label, index) => (
                <div key={label} style={{width: "200px", textAlign: "left"}}>
                    {label} : {values[index]}
                </div>
            ))}</div>
            
        </div>

    );
};
