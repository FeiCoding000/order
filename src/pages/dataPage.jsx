import React from "react";
import { useEffect } from "react";
import { db } from "../config/firebase";
import { get, ref } from "firebase/database";
import { BarChart } from "../components/dataDisplay/BarChart";
import { Box } from "@mui/material";
import { PieChart } from "../components/dataDisplay/PieChart";

export const DataPage = () => {
  const [totalOrder, setTotalOrder] = React.useState(0);
  const [milkStatistc, setMilkStatistc] = React.useState({});
  const [coffeeStats, setCoffeeStats] = React.useState({});

  //get data from firebase
  useEffect(() => {
    const deref = ref(db, "Orders");
    async function fetchData() {
      const snapshot = await get(deref);
      const data = snapshot.val();
      console.log(data);
      if (data) {
        caculateDailyOrder(data);
        caculateMilk(data);
        console.log("milk", milkStatistc);
      }
    }

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
  };

  //get milk statistic
  const caculateMilk = (data) => {
    const tempStatistic = {
        "Full Cream": 0,
        Lite: 0,
        Soy: 0,
        Almond: 0,
        Oat: 0,
        "Lactose free": 0,
    };
    data.forEach(element => {

        if (element.milk && tempStatistic.hasOwnProperty(element.milk)){
            tempStatistic[element.milk] += 1;
        };
        });
        setMilkStatistc(tempStatistic);
        console.log("temp data milk", tempStatistic);
};
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          bgcolor: "transparent",
          minHeight: "100vh",
        }}
      >
        <BarChart coffeeStats={coffeeStats} totalOrder={totalOrder}></BarChart>
        <PieChart milkDetails={milkStatistc}></PieChart>
      </Box>
    </>
  );
};
