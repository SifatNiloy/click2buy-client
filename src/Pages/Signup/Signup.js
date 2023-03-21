import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser}= useContext(AuthContext)
    const handleSignUP =( data )=> {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const user= result.user;
            console.log(user)
        })       
    };
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUP)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name",
                            { required: "name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                            { required: "email is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 6, message: "password must be 6 characters or longer" },
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must have uppercase, number and special characters" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                       
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    <p>Already have an account? <Link className='text-warning' to="/login">Please Login</Link> </p>


                    <div className="divider">OR</div>
                    <button className='btn btn-outline btn-primary w-full'>Continue With Google </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;