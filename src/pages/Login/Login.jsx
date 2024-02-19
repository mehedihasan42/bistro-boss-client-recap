import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const capthaRef = useRef(null)
    const [disable,setDisable] = useState(true)

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
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)}
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <input type="text" ref={capthaRef} placeholder="write the above captha" className="input input-bordered" />
              <button onClick={handleCaptcha} className="btn btn-sm">Small</button>
              </div>
              <div className="form-control mt-6">
              {/* <input type="submit"/> */}
              <button disabled={disable} className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;