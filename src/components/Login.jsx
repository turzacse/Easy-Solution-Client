import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, createUserGoogle, locationState, setLocationState } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const goToRegister = () => {
        setLocationState(location.state);
        navigate('/register');
        console.log(location.state);
    }

    const handleLogIn = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)  ;
        
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state? location.state : '/');    
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'Invalid email or password!',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
    }

    const handleLogInWithGoogle = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        createUserGoogle ()
        .then(result => {
            console.log(result.user);
            console.log('loggin  in')
            navigate(location?.state? location.state : '/');
            console.log(location);
        })
        .catch (error => {
            console.error(error);
        })
    }
    return (
        <div>
            <div className="hero mt-8 bg-base-200">
                <div className="my-20">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className="pt-10 text-2xl text-center font-semibold text-orange-500">Easy Solution</h2>
                        <form onSubmit={handleLogIn} className="md:p-10 p-4">
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-600 text-white text-2xl font-semibold p-2">Login</button>
                            </div>
                            <h2 className="text-center text-2xl font-semibold text-green-500">Join with us</h2>
                            <button onClick={handleLogInWithGoogle} className="btn bg-orange-500 text-2xl text-white"><FaGoogle/></button>
                            <p className="py-6">Do not have a account? Proceed to <span className="text-blue-500 font-semibold" to='/register' onClick={goToRegister} >Register</span></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>       
    );
};

export default Login;