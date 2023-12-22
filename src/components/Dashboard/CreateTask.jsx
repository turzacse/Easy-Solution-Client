import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useAxiosSecure from "./../Hooks/useAxiosSecure"
import Marquee from "react-fast-marquee";


const CreateTask = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm()

    const axiosSecure = useAxiosSecure();

    const onSubmit = async (res) => {
        console.log(res);

        const task = {
            title: res.Task_name,
            description: res.Task_description,
            deadline: res.deadline,
            priority: res.priority

        }
        console.log(task);

        const tasklist = await axiosSecure.post('/todo', task);
        console.log(tasklist.data)
        if (tasklist.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Task is added to the List.",
                showConfirmButton: false,
                timer: 1500
            });
        }

        console.log(res.data);
    };

    return (
        <div>
            <h1 className="font-bold text-3xl text-center p-4 bg-orange-300">Easy Solution</h1>

            <Marquee className="text-xl font-semibold my-4 text-indigo-400">
                Create a to-do & make your task so easy. Don't forgate to review me.
            </Marquee>

            <form className="w-1/2 mx-auto my-6 shadow-2xl rounded-3xl justify-center items-center h-full p-10 text-gray-900 bg-base-200" onSubmit={handleSubmit(onSubmit)}>

                {/* Task name */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Task name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Name"
                        {...register('Task_name', { required: true })}
                        required
                        className=" input input-bordered w-full" />
                </div>
                {/* task description */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Task Description*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Task Description"
                        {...register('Task_description', { required: true })}
                        required
                        className=" input input-bordered w-full" />
                </div>

                {/* task deadline */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Deadline*</span>
                    </label>
                    <input
                        type="date"
                        // id="date" 
                        {...register("deadline", {
                            valueAsDate: true,
                            required: true
                        })}
                        required
                        className=" input input-bordered w-full" />
                </div>

                {/* task priority */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Priority Level*</span>
                    </label>
                    <select defaultValue="default" {...register('priority', { required: true })}
                        className=" select select-bordered w-full">
                        <option disabled value="default">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <input type="submit" className="btn bg-blue-400" />
            </form>

        </div>
    );
};

export default CreateTask;