import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const options = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories:['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    axisBorder:{
      show:false
     },
     axisTicks:{
       show:false
     }
   },
   yaxis:{
     title:{
       style:{
         fontSize:'0px'
       }
     },
     min :0 ,
     max :100
   }
};

const ChartOne = ({props}) => {
 const [state, setState] = useState({
   series:[
     {name:'Product One',
       data:[23,11,22,27,13,22,37,21,44,22,30,45]
     },

     {name:'Product Two',
       data:[30,25,36,30,45,35,64,52,59,36,39,51]
     }
   ]
 });
 return (
  <div className={`d-Chart w-full my-1 col-span-12 rounded-[10px] border border-stroke ${props.dark === true ? 'bg-slate-500' : 'bg-slate-100'} px-5 pt-7.5 pb-5 shadow-default sm:px-7.5 xl:col-span-8`}>
    <div className="w-full flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="w-full flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="w-2/5 flex min-w-47.5">
            <span className="mt-2 mr-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#3c50e0]">
              <span className="block h-4 w-4 rounded-full bg-[#3c50e0]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#3c50e0]">Total Revenue</p>
              <p className={`text-sm ${props.dark === true ? 'text-slate-100' : 'text-black'} font-medium`}>12.04.2022 - 12.05.2022</p>
            </div>
          </div>
          <div className="w-2/5 flex min-w-47.5">
            <span className="mt-2 mr-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#80caee]">
              <span className="block h-4 w-4 rounded-full bg-[#80caee]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#80caee]">Total Sales</p>
              <p className={`text-sm ${props.dark === true ? 'text-slate-100' : 'text-black'} font-medium`}>12.04.2022 - 12.05.2022</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="w-2/4 xl:w-1/4 flex justify-evenly items-center rounded-md bg-slate-600 p-1.5 mt-2">
            <button className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card">
              Day
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-white hover:bg-white hover:text-black">
              Week
            </button>
            <button className="rounded py-1 px-3 text-xs font-medium text-white hover:bg-white hover:text-black">
              Month
            </button>
          </div>
        </div>
      </div>
    
    <div>
      <div id="chartOne" className="-ml-5">
        <ReactApexChart
          options={options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  </div>
);
};


export default ChartOne;
