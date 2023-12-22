import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { IoIosCloudDone } from "react-icons/io";



const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/todo')
            .then((res) => {
                setTodos(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosSecure])

    const [goings, setGoings] = useState([]);

    useEffect(() => {
        axiosSecure.get('/ongoing')
            .then((res) => {
                setGoings(res.data);
                console.log();
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosSecure])

    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        axiosSecure.get('/completed')
            .then((res) => {
                setCompleted(res.data);
                console.log();
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosSecure])

    const handleDeleteFromTodo = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/todo/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your To-Do task has been deleted.",
                                icon: "success"
                            });
                            const updatedTodos = todos.filter(todo => todo._id !== id);
                            setTodos(updatedTodos);
                        }
                    })
            }
        });

    }
    const handleDeleteFromOngoing = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/ongoing/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your On-Going task has been deleted.",
                                icon: "success"
                            });
                            const updatedOngoing = goings.filter(going => going._id !== id);
                            setGoings(updatedOngoing);
                        }
                    })
            }
        });

    }
    const handleDeleteFromCompleted = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/completed/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Completed task has been deleted.",
                                icon: "success"
                            });
                            const updatedCompleted = completed.filter(complete => complete._id !== id);
                            setCompleted(updatedCompleted);
                        }
                    })
            }
        });

    }



    useEffect(() => {
        fetchTodos();
        fetchGoings();
        fetchCompleted();
    }, [axiosSecure]);

    const fetchTodos = () => {
        axiosSecure.get('/todo')
            .then((res) => {
                setTodos(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchGoings = () => {
        axiosSecure.get('/ongoing')
            .then((res) => {
                setGoings(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchCompleted = () => {
        axiosSecure.get('/completed')
            .then((res) => {
                setCompleted(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleMoveToTodo = async (object) => {
        try {
            const task = {
                title: object.title,
                description: object.description,
                deadline: object.deadline,
                priority: object.priority
            }
            console.log(task);

            const tasklist = await axiosSecure.post('/todo', task);
            console.log(tasklist.data)
            fetchTodos();
            fetchGoings();
            fetchCompleted();
        } catch (error) {
            console.error(error);
        }
    };

    const handleMoveToOngoing = async (object) => {
        try {
            const task = {
                title: object.title,
                description: object.description,
                deadline: object.deadline,
                priority: object.priority
            }
            console.log(task);

            const tasklist = await axiosSecure.post('/ongoing', task);
            console.log(tasklist.data)
            fetchTodos();
            fetchGoings();
            fetchCompleted();
        } catch (error) {
            console.error(error);
        }
    };

    const handleMoveToCompeleted = async (object) => {
        try {
            const task = {
                title: object.title,
                description: object.description,
                deadline: object.deadline,
                priority: object.priority
            }
            console.log(task);
            const tasklist = await axiosSecure.post('/completed', task);
            console.log(tasklist.data)
            fetchTodos();
            fetchGoings();
            fetchCompleted();
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:mx-10 mx-4">
            <div>
            <h1 className="text-3xl font-bold text-center bg-blue-500 p-4">To-Do List</h1>
                {
                    todos.map((todo) => (
                        <div className="border bg-base-200" key={todo._id}>
                            <h2 className="text-xl font-bold">{todo.title}</h2>
                            {/* <p>{todo.description}</p> */}
                            <p>{todo.deadline}</p>
                            <h2>{todo.priority}</h2>
                            <button className="btn glass text-2xl text-red-400" onClick={() => handleDeleteFromTodo(todo._id)}><MdDelete/></button>
                            <button className="btn glass text-2xl text-orange-400" onClick={() => handleMoveToOngoing(todo)}><FaPersonRunning/></button>
                            {/* <button className="btn glass text-2xl text-green-400" onClick={() => handleMoveToCompeleted(todo)}><IoIosCloudDone/></button> */}
                        </div>
                    ))}
            </div>

            <div>
            <h1 className="text-3xl font-bold text-center bg--500 p-4">On-Going List</h1>
                {
                    goings.map((todo) => (
                        <div className="bg-base-200" key={todo._id}>
                            <h2 className="text-xl font-bold">{todo.title}</h2>
                            {/* <p>{todo.description}</p> */}
                            <p>{todo.deadline}</p>
                            <h2>{todo.priority}</h2>
                            <button className="btn glass text-2xl text-red-400" onClick={() => handleDeleteFromOngoing(todo._id)}><MdDelete/></button>
                            <button className="btn glass" onClick={() => handleMoveToTodo(todo)}>To-Do</button>
                            <button className="btn glass text-2xl text-green-400" onClick={() => handleMoveToCompeleted(todo)}><IoIosCloudDone/></button>
                        </div>
                    ))}
            </div>

            <div>
            <h1 className="text-3xl font-bold text-center bg-green-500 p-4">Completed Task</h1>
                {
                    completed.map((todo) => (
                        <div className="bg-base-200" key={todo._id}>
                            <h2 className="text-xl font-bold">{todo.title}</h2>
                            {/* <p>{todo.description}</p> */}
                            <p>{todo.deadline}</p>
                            <h2>{todo.priority}</h2>
                            <button className="btn glass text-2xl text-red" onClick={() => handleDeleteFromCompleted(todo._id)}><MdDelete/></button>
                        </div>
                    ))}
            </div>
            </div>
        </div>
    );
};

export default TodoList;