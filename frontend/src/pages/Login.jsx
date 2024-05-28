import { useState } from "react";
import PageBanner from "../components/PageBanner"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import Input from "../components/Input";

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const navigate = useNavigate()

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
    console.log(user);

    try {
      const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        
          body: JSON.stringify(user),       
      });


      const data = await response.json();
      console.log("Response from Server", data);


      if (response.ok) {
          //Store Token in Local Storage
          storeTokeninLS(data.token);
          setUser({ email:"", password:""});
          toast.success(data.message);
          navigate("/dashboard/profile");
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.log("Login Failed", error);
    }

  }

  return (
    <>
      <PageBanner pagename="Login" />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/src/assets/logo/WebApplogo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="max-w-md mx-auto" onSubmit={handleFormSubmit}>
            <Input inputType="email" name="email" value={user.email} onChange={handleInput} placeholder="Email address"/>
            <Input inputType="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter Password"/>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not Registered Yet?
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Please register yourself first!!!...
            </a>
          </p>
        </div>
      </div>

    </>
  );
}

export default Login