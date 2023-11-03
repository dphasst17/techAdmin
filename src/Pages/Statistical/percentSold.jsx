import { useState, useEffect } from "react"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(CategoryScale);

const PercentSold = ({ data }) => {
    const [chartData, setChartData] = useState({
        labels: data?.map((data) => data.idType.toString()),
        datasets: [
            {
                label: "Percent",
                data: data?.map((data) => data.percentSold),
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
        data !== null && setChartData({
            labels: data?.map((data) => data.idType.toString()),
            datasets: [
                {
                    label: "Percent",
                    data: data.map((data) => data.percentSold),
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
    }, [data])
    return <>{data !== null && <div className="percent-sold w-[300px] h-auto bg-slate-500 rounded-lg mx-2 my-">
        <h2 className={`text-slate-100 text-center text-[20px] font-semibold`}>Percent product sold</h2>
        <Pie
            data={chartData}
            options={{
                plugins: {
                    title: {
                        display: true,
                        color: "#FBFCFC",
                        text: "",
                    },
                    legend: {
                        labels: {
                            color: 'white',
                        }
                    }
                },
            }}
        />
    </div>}
    </>
}
export default PercentSold;