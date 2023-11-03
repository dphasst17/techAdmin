import CardFour from '~/component/Layout/Dashboard/CardFour.jsx';
import CardOne from '~/component/Layout/Dashboard/CardOne.jsx';
import CardThree from '~/component/Layout/Dashboard/CardThree.jsx';
import CardTwo from '~/component/Layout/Dashboard/CardTwo.jsx';
import ChartOne from '~/component/Layout/Dashboard/ChartOne.jsx';
import ChartThree from '~/component/Layout/Dashboard/ChartThree.jsx';
import ChartTwo from '~/component/Layout/Dashboard/ChartTwo.jsx';
import TableOne from '~/component/Layout/Dashboard/TableOne';
import Widget from '~/component/Layout/Dashboard/Widget';
import InfoUser from '~/component/Layout/Dashboard/Info';
import { useContext } from 'react';
import { StateContext } from '~/context/stateContext';

const Home = () => {
  const {dark} = useContext(StateContext)
  return (
    <div className="h-pages w-full h-auto pt-2 px-10 flex flex-col justify-around items-center">
      <div className="w-full min-h-[10%] flex flex-col lg:flex-row justify-around items-center rounded-[10px] bg-slate-500">
        <Widget />
        <InfoUser />
      </div>
      <div className="w-full min-w-[400px]sm:min-h-[15%] h-auto flex flex-wrap flex-row justify-around items-center bg-slate-500 rounded-[10px] mx-2 mt-2 mb-1">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
      <div className="w-full h-auto flex flex-wrap justify-between">
        <ChartOne props={{dark}} />
        <ChartTwo props={{dark}} />
        <ChartThree props={{dark}} />
        <TableOne props={{dark}} />
      </div>
      <div className="w-full h-[50px]"></div>
    </div>
  );
};

export default Home;
