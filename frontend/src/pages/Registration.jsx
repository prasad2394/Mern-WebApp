import { useState } from "react";
import {useNavigate} from "react-router-dom";
import PageBanner from "../components/PageBanner"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Input from "../components/Input";

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
      
      const data = await response.json();
      console.log("Response from Server", data.extraDetails);

      if (response.ok) {
          //Store Token in Local Storage
          storeTokeninLS(data.token);
          setUser({username:"", email:"", phone:"", password:""});
          toast.success(data.message);
          navigate("/dashboard/profile");
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
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
              <Input inputType="text" name="username" value={user.username} onChange={handleInput} placeholder="Enter Username"/>
              <Input inputType="email" name="email" value={user.email} onChange={handleInput} placeholder="Email address"/>
              <Input inputType="number" name="phone" value={user.phone} onChange={handleInput} placeholder="Enter Phone Number"/>
              <Input inputType="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter Password"/>
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