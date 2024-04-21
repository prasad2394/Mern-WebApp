import { useState } from "react";
import {useNavigate} from "react-router-dom";
import PageBanner from "../components/PageBanner"
import { useAuth } from "../store/auth";

const Registration = () => {

  const [user, setUser] = useState({
      username:"",
      email:"",
      phone:"",
      password:"",
  });

  const navigate = useNavigate();

  const {storeTokeninLS} = useAuth();

  //Handling Input Values
  const handleInput = (e) => {
    //console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  };

  //Handling Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        
          body: JSON.stringify(user),       
      });
      console.log(response);
      if (response.ok) {
          const data = await response.json();
          console.log("Response from Server", data);
          //Store Token in Local Storage
          storeTokeninLS(data.token);
          setUser({username:"", email:"", phone:"", password:""});
          navigate("/login");
      }
    } catch (error) {
      console.log("Registration Failed", error);
    }

  }

  return (
    <>
        <PageBanner pagename="Register" />

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/src/assets/logo/WebApplogo.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="off"
                    required
                    placeholder="Enter Username"
                    value={user.username}
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    autoComplete="off"
                    required
                    placeholder="Enter Your Phone Number"
                    value={user.phone}
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    required
                    placeholder="Enter Your Password"
                    value={user.password}
                    onChange={handleInput}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already registered?
               <a href="http://localhost:5173/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                 Please login Here...
              </a>
            </p>
          </div>
        </div>

    </>
  );
}

export default Registration