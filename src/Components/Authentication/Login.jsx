
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import Swal from "sweetalert2";



import app from "../firebase/firebase.config";
// import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const {  signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();


    // console.log('location i n the login page', location)

    const handleLogin = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const user = { email };

                axios.post('https://online-study-server-cyan.vercel.app/jwt', user, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                    if(res.data.success){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Succesfully Logged In',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                   
                    }
                    navigate(location?.state ? location?.state : '/');
                })







                // toast('Login Successfull');
                // navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result =>{
                const loggedUser = result.user;
                // console.log(loggedUser);
                // const user = { email };
                axios.post('https://online-study-server-cyan.vercel.app/jwt', loggedUser.email, {withCredentials: true})
                .then(res =>{
                    console.log(res.data)
                    if(res.data.success){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Succesfully Logged In',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                   
                    }
                    navigate(location?.state ? location?.state : '/');
                })
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        
     
         <div className=" bg-red-100 lg:mx-[23rem] lg:py-9 rounded-xl sm:ml-[30px] sm:mr-[42px]" >
           <h2 className="text-3xl my-10 text-center">Log in to your Account</h2>
           
           <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Email</span>
                   </label>
                   <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text">Password</span>
                   </label>
                   <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                   <label className="label">
                       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                   </label>
               </div>
               <div className="form-control mt-6">
                   <button className="btn btn-primary">Login</button>
               </div>
           </form>
           <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>


           <div className=" items-center text-center">
               <p>Or</p>
               <button onClick={handleGoogleSignIn}>Sign in with <span className=" text-blue-900">Google</span></button>
           </div>
           {/* <ToastContainer /> */}

       </div>
      
        
    );
};

export default Login;