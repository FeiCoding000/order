import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/material";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart = ({ coffeeStats, totalOrder}) => {

    const lables = Object.keys(coffeeStats);
    console.log(lables);
    const data = Object.values(coffeeStats);
    console.log(data);
    //title
    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Coffee Orders Per Day" },
        },
    };
    //chartdata
    const chartdata = {
        labels: lables,
        datasets: [
            {
                label: "Coffee Orders",
                data: data,
                backgroundColor: "rgb(255, 255, 255, 0.8)",
                borderColor: "rgb(249, 255, 167)",
                borderWidth: 1,
            },
        ],
    };

  return <div>
    <Box sx={{ textAlign: "center", py: 4, bgcolor: "transparent"}}>
    <h3>Daily Coffee Orders(total order number for this month: {totalOrder})</h3>
    <Bar data={chartdata} options={options}></Bar>
    </Box>
    
  </div>;
};
