
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useContext, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import app from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const { createUser } = useContext(AuthContext);

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const name = form.get('name')
    const photo = form.get('photo')

    console.log(email,password,name,photo)

    setRegisterError('');
    setSuccess('');



    if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(password)) {
      setRegisterError('Your password should be at least 6 characters long, contain at least one uppercase character, and have at least one special character.');
      return;
    }


    createUser(email, password )
      .then(result => {
        console.log(result.user)
        setSuccess('User Created Successfully.')
        toast('Registration Successfull');

        const user = { email };
        fetch('https://brand-ass-10-server-qnopig852-mahmuda-sultanas-projects.vercel.app/user',{

          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          
        })

      })
      .catch(error => {
        console.error(error);
        setRegisterError(error.message);
        
      })

  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then()
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div>

      <div className='bg-red-100 lg:mx-[23rem] lg:py-6 my-5 rounded-xl'>
        <h2 className="text-3xl my-10 text-center">Register Your Account</h2>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="url" name="photo" id="" placeholder='Photo-URL' className="input input-bordered"/>
          </div>

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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className=' items-center text-center'>
          {
            registerError && <p className="text-red-700">{registerError}</p>
          }</div>
        <div className=' items-center text-center'>
          {
            success && <p className="text-green-600">{success}</p>
          }
        </div>

        <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        <div className=" items-center text-center">
          <p>Or</p>
          <button onClick={handleGoogleSignIn}>Sign in with <span className=" text-blue-900">Google</span></button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;