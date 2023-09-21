import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const url = "https://localhost:7178";

    const [email, setEmail] = useState();
    const [logpassword, setLogpassword] = useState();
    async function login(e) {
        e.preventDefault();

        await axios.post(`${url}/api/Account/SignIn`,
            {
                Email: email,
                Password: logpassword,
            })
            .then(function (response) {
                if (response.data.status === "success" || response.status === 200) {
                    localStorage.setItem("token", JSON.stringify(response.data));
                    console.log(response);
                    navigate("/");
                } else {
                    console.log(response);
                }
                console.log(response);
            })
            .catch(function (error) { });
    };

    return (

        <div className='container bg-slate-50'>
            <section
                id="login-area"
            >
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Login to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={(e) => login(e)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        required="required"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="password"
                                        required="required"
                                        id="passwordId"
                                        onChange={(e) => setLogpassword(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a onClick={() => navigate(`/register`)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>



    )
}

export default Login