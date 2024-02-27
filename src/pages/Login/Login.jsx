import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import image from "../../assets/others/authentication2.png";
import './login.css'
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const capthaRef = useRef(null)
    const [disable,setDisable] = useState(true)
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleCaptcha = () =>{
        const user_captcha = capthaRef.current.value;
        console.log(user_captcha)
        if(validateCaptcha(user_captcha)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        signIn(data.email,data.password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
        })
      }

    return (
        <div className="hero min-h-screen background">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           <img src={image} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center">Log In</h2>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
              <LoadCanvasTemplate />
              <input onBlur={handleCaptcha} type="text" ref={capthaRef} placeholder="write the above captha" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
              {/* <input type="submit"/> */}
              <button disabled={false} className="btn bg-[#D1A054] text-white">Login</button>
              </div>
            </form>
            <Link to='/signUp' className="text-[#D1A054] text-center">New here? Create a New Account</Link>
            <p className="text-center">Or Log In with</p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;