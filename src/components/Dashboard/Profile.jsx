import { useContext } from "react";
import { AuthContext } from "../AuthProvide/AuthProvider";
import {motion} from "framer-motion";
import Swal from "sweetalert2";

const Profile = () => {
    const  {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () => {
            Swal.fire(
                'Logged Out!',
                'You are logged out successfully!',
                'success'
              )
        })
        .catch( error => {
            console.error(error);
        })
    }
    return (
        <div className="">
            <h2 className=" bg-orange-300 py-6 shadow-2xl  text-4xl text-center font-bold p-4">Profile</h2>

        {/* <motion.div className=" text-gray-900" style={{backgroundImage: 'url()'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
         */}
            <div className="flex  lg:items-center h-full">

            <div className="hero lg:min-h-screen w-1/2 mx-auto shadow-2xl rounded-3xl bg-base-200 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={user.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">{user.displayName}</h1>
                    <p className="py-6">{user.email}</p>
                    <button className="btn glass" onClick={handleLogOut}>LogOut</button>
                    </div>
                </div>
                </div>
            </div>

        {/* </motion.div>    */}
        </div>
    );
};

export default Profile;