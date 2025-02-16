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
                  content="Sign up"
                  bgcolor="bg-gray-300"
                  px="px-[15px]"
                  py="py-[4px]"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-10">
                <h1 className="font-semibold text-2xl">Inventory System</h1>
              </div>
              <p className="flex justify-center text-center w-72 mx-auto mt-5 font-semibold">Please enter your detail info to access the app</p>
              <form action=""></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
