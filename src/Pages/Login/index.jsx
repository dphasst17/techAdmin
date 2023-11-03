import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { adminLogin } from "~/api/user";
import { useSetLocalStorage } from "~/hooks/useLocalStorage";

const Login = () => {
  const { register, handleSubmit, formState: { errors: err } } = useForm();
  const onSubmit = (data) => {
    adminLogin(data)
    .then(res => {
      console.log(res);
      useSetLocalStorage({key:'isLogin',value:true})
      useSetLocalStorage({key:'role',value:res.role})
      useSetLocalStorage({key:'exp',value:res.exp})
      Cookies.set('token',res.accessToken,{
        expires: new Date(res.exp * 1000),
        path: "/",
      })
      window.location.href="/"
    })
    .catch(err => console.log(err))
  }
  return <section className="w-screen h-screen bg-slate-700 my-0 mx-auto">
    <div className="h-full">
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center">
        <div
          className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image" />
        </div>
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-2/5">

          <div className="w-full">
            <form>
              <div className="md:flex md:justify-center md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                    Username
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    {...register("username", { required: true })}
                    className={` h-[40px] bg-gray-200 ${err.username ? 'border-red-500' : 'border-transparent'} border-solid border-[1px] appearance-none rounded-[5px] w-full py-2 px-4 text-gray-700
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                    name="username" id="username" type="text"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    {...register("password", { required: true })}
                    className={`h-[40px] bg-gray-200 ${err.password ? 'border-red-500' : 'border-transparent'} border-solid border-[1px] appearance-none rounded-[5px] w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                    name="password" id="password" type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </form>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">
                  Send me your newsletter!
                </span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button onClick={(e) => {e.preventDefault(); handleSubmit(onSubmit)(); }} className="w-[180px] flex items-center justify-center bg-blue-600  active:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-all">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Login;