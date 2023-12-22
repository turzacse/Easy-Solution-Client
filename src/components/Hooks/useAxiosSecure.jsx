import axios from "axios";



const axiosPublic = axios.create({
    baseURL: 'https://easy-solution-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;