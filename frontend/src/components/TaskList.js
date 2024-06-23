import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdLibraryBooks } from "react-icons/md";


function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get('https://task-manager-full-stack-tau.vercel.app/tasks');
=======
        const response = await axios.get('https://task-manager-hys.vercel.app/tasks');
>>>>>>> 8dac8fff33f1aef3618035e4cd2ac2768e3016f9
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
<<<<<<< HEAD
      await axios.delete(`https://task-manager-full-stack-tau.vercel.app/tasks/${id}`);
=======
      await axios.delete(`https://task-manager-hys.vercel.app/tasks/${id}`);
>>>>>>> 8dac8fff33f1aef3618035e4cd2ac2768e3016f9
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  
  return (
    <div className={`h-screen p-4 ${tasks.length === 0 ? "bg-slate-200" : "bg-gray-300" } h-[100%]`}>
      
      <div className='flex justify-start items-center   pb-[50px]'>
      <p className='text-2xl lg:text-4xl font-bold text-orange-600 '>TASK LIST
         </p>
        <MdLibraryBooks className='text-2xl lg:text-4xl text-black'/>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-3xl uppercase  mx-auto font-bold ${tasks.length === 0 ? "text-black" : "text-black" }`}>

          <p className='text-lg lg:text-8xl '>Simplify Your <span className='text-orange-600'>Life</span> </p>
          <br className='hidden lg:block'/>
          <p className='text-lg lg:text-3xl pb-10'>Organize tasks, <span className='text-orange-600'>set </span> priorities, and  <span className='text-orange-600'>achieve</span>  your goals with <span className='text-orange-600'>ease.</span></p>
        </h1>
       
        {tasks.length === 0 ? (
        <Link to="/add" className="btn btn-primary ">
          
          <div className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 md:w-[150px] w-[100px] text-xl md:text-lg rounded-2xl ml-[280px]">Add New Task</div>
        </Link>
      ) : (
        <>
        <Link to="/add" className="hidden lg:block btn btn-primary  -translate-y-[150px]">
          <span className="bg-gradient-to-r from-orange-600 to-purple-900 text-white px-10  py-2 hover:bg-orange-600  rounded-lg ">Add New Task</span>
        </Link>
        <Link to="/add" className="block lg:hidden btn btn-primary  -translate-y-[150px]">
          <span className="bg-gradient-to-r from-orange-600 to-purple-900 text-white px-10  py-2 hover:bg-orange-600  rounded-lg ">Task</span>
        </Link>
        
        </>
      )}
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length === 0 ? (
          <div className="flex justify-center col-span-full">
            
          </div>
        ) : (
          tasks.map(task => (
            <div key={task._id} className="bg-slate-200 p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
              <p className="mb-2">{task.description}</p>
              <p className="text-gray-600">Due Date: {new Date(task.dueDate).toISOString().split('T')[0]}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/tasks/${task._id}`} className="text-green-500 flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9m-9-4h6M7 4h10m-6 8h6m-4 4h6M3 8h6m-4 4h6m-4 4h6M5 4h.01M5 16h.01M5 20h.01" />
                  </svg>
                  Update
                </Link>
                <button onClick={() => deleteTask(task._id)} className="text-red-600 hover:text-red-800 flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
