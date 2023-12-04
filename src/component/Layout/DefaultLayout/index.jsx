import PropTypes from 'prop-types';
import { Header } from './Header/header';
import Login from '~/pages/Login';
import { useContext } from 'react';
import { StateContext } from '~/context/stateContext';
import BtnNav from './btnNav';
function DefaultLayout({ children }) {
  const { dark } = useContext(StateContext)
  return <div className="wrapper w-screen h-full flex flex-row justify-around lg:justify-between">
    {window.location.pathname !== '/login'
      ?
      <>
        <Header />

        <main className={`w-screen lg:w-[88vw] h-auto flex flex-wrap ${dark === true ? 'bg-slate-700' : 'bg-slate-200'} transition-all`}>
          <BtnNav />
          {children}
        </main>
      </>
      :
      <>
        <Login />
      </>
    }
  </div>
}
DefaultLayout.propTypes = {
  children: PropTypes.node
};
export default DefaultLayout;