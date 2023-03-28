import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css'
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError]= useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"; 
    const handleLogin = data => {
        // console.log(data)
        setLoginError('');
        // console.log(errors)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log(user.uid);
                navigate(from, { replace: true })
            })
            .catch(error =>{
                console.log(error.message)
                setLoginError(error.message)
            })
    };
    const { LoginWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        LoginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 box'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}  >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                            { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 6, message: "password must be 6 characters or longer" },
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password? </span></label>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <p>New to our site? <Link className='text-warning' to="/signup">Create New Account</Link> </p>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError} </p>}
                    </div>

                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary w-full'>Continue With Google </button>
                    
                </form>
            </div>
        </div>
    );
};

export default Login;