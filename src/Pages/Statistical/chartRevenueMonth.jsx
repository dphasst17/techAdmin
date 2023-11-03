import { useGetData } from "~/hooks/useSelectData";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
Chart.register(CategoryScale);
const RevenueMonth = () => {
    const { dataResult, err } = useGetData('sta', 'month');
    const [chartData, setChartData] = useState({
        labels: dataResult?.map((data) => data.month.toString()),
        datasets: [
            {
                label: "Percent",
                data: dataResult?.map((data) => data.revenue),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#f3ba2f",
                    "#117A65",
                    "#2a71d0",
                    "#5B2C6F ",
                    "#EC7063 "
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    })
    useEffect(() => {
        dataResult !== null && setChartData({
            labels: dataResult?.map((data) => data.month.toString()),
            datasets: [
                {
                    label: "Revenue month:",
                    data: dataResult?.map((data) => data.revenue),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#50AF95",
                        "#f3ba2f",
                        "#117A65",
                        "#2a71d0",
                        "#5B2C6F ",
                        "#EC7063 "
                    ],
                    borderColor: "white",
                    borderWidth: 1
                }
            ]
        })
    }, [dataResult])
    return <div className="revenue-month w-3/5 min-w-[300px] h-auto flex flex-col justify-center items-center bg-slate-300 rounded-lg mx-auto my-20">
        <h2 className={`text-slate-500 text-center text-[20px] font-semibold`}>Revenue collected by month</h2>
        <Bar
    data={chartData}
    options={{
        plugins: {
            title: {
                display: true,
                color: "white",
                text: "",
            },
            legend: {
                labels: {
                    color: 'gray',
                }
            }
        },
    }}
/>

    </div>
}
export default RevenueMonth;