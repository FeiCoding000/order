import React from 'react'
import { useEffect } from 'react'
import { db } from '../config/firebase';   
import { get, ref } from 'firebase/database';
import { BarChart } from '../components/dataDisplay/BarChart';
import { Box } from '@mui/material';



export const DataPage = () => {

    const [totalOrder, setTotalOrder] = React.useState(0);
    const [fullCream, setFullCream] = React.useState(0);
    const [lite, setLite] = React.useState(0);
    const [soy, setSoy] = React.useState(0);
    const [almond, setAlmond] = React.useState(0);
    const [oat, setOat] = React.useState(0);
    const [lactoseFree, setLactoseFree] = React.useState(0);
    const [other, setOther] = React.useState(0);
    const [coffeeStats, setCoffeeStats] = React.useState({});


    //get data from firebase
    useEffect(() => {
        const deref = ref(db, "Orders");
        async function fetchData() {
            const snapshot = await get(deref);
            const data = snapshot.val();
            console.log(data);
            if(data){
                caculateDailyOrder(data);
            }
        };

        fetchData();
        // caculateTotalOrder();
    }, []);

    // get total order number
    // const caculateTotalOrder = (order) => {
    //     const totalOrder = Object.keys(order).length;
    //     setTotalOrder(totalOrder);
    // }
    useEffect(() => {
        const deref = ref(db, "Order Number");
        async function fetchOrderNumber() {
            const snapshot = await get(deref);
            const orderNumber = snapshot.val();
            setTotalOrder(orderNumber);
        }
        fetchOrderNumber();
    }, [coffeeStats]);



    // get daily order number
    const caculateDailyOrder = (order) => {
        let dailyOrder = {};
        for (let key in order) {
            const item = order[key];
            const date = item.timeStamp;
            if (!dailyOrder[date]) {
                dailyOrder[date] = 1;
            } else {
                dailyOrder[date] += 1;
            }
        }
        setCoffeeStats(dailyOrder);
    }

  return (
    <>
    <Box sx={{ textAlign: "center", py: 4, bgcolor: "transparent", minHeight: "100vh" }}>
    <BarChart coffeeStats={coffeeStats} totalOrder={totalOrder}></BarChart>
    </Box>
    </>

  )
}
