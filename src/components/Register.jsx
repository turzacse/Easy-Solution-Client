import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Register = () => {
    const { createUser, locationState } = useContext(AuthContext); 
    console.log("location in register page ", locationState );
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        const passRegex =  /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        if (!passRegex.test(password)) {
            return (
                Swal.fire({
                    title: 'Error!',
                    text: 'Provide length 6. And also a Capital & special Char.',
                    icon: 'error',
                    confirmButtonText: 'Fix It'
                  })
            )
        }
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            navigate(locationState? locationState : '/')
            Swal.fire(
                'Tumake To-Do Application a Sagotom'
              )
        })
        .catch(error => {
            console.error(error); 
        })
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="my-20">
                    <div>
                        
                    </div>
                    <div className="card md:w-full md:max-w-screen-sm shadow-2xl bg-base-100">
                    <h2 className="pt-10 text-2xl text-center font-semibold text-orange-500">Easy Solution</h2>
                        <form onSubmit={handleRegister} className="md:p-10 p-4">
                        {/* <h2 className="pt-10 text-2xl text-center font-semibold text-orange-500">Easy Solution</h2> */}
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500 text-2xl text-white font-semibold">Register</button>
                            <p className="py-6">Already have a account? Proceed to <Link className="text-gray-900 font-bold" to='/login' >Login</Link></p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Register;