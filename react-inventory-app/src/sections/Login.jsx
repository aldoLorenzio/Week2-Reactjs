import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white shadow-lg rounded-lg min-w-[1200px] h-[550px] w-3/4">
        <div className="flex">
          <div className="w-3/4">
            <img src="/loginCover.png" className="h-[550px]" alt="" />
          </div>
          <div className="w-1/2  mt-12">
            <div className="flex justify-end font-semibold mr-2">
              <p className="mr-2">don't have account?</p>
              <div>
                <Button
                  className="bg-gray-300 py-[4px] px-[15px]"
                  content="Sign up"
                  href="/signUp"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-10">
                <h1 className="font-semibold text-3xl">Inventory <span className="text-blue-600">System</span></h1>
              </div>
              <p className="flex text-base justify-center text-center w-80 mx-auto mt-5 font-semibold">Please enter your detail info to access the app</p>
              <form action="" className="flex flex-col mt-7 gap-y-6">
                <input className="border border-black p-2 block w-2/3 mx-auto" type="text" placeholder="Email" />
                <input className="border border-black p-2 block w-2/3 mx-auto" type="password" placeholder="Password" />
                <div className=" mx-auto">
                  <Button
                    className="py bg-blue-500 text-white"
                    content="Login"
                  />

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
