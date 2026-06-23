import { useState } from "react";
import TaskItem from "./components/tasks/TaskItem"
import SideBar from "./components/layout/Sidebar";


function App() {

  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDeadline, setNewDeadline] = useState('');

  const addTask = () => {

    if (!newTitle.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: newTitle,
      deadline: newDeadline || '',
      completed: false,
      label: 'Personal'
    };


    setTasks([...tasks, newTask])
    setNewTitle('');
    setNewDeadline('');

  }

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks)
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      <SideBar />

      {/* ====================== MAIN CONTENT ====================== */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="p-8 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
              <p className="text-gray-500 mt-1">Here's what's on your plate today.</p>
            </div>

            {/* Overdue Banner */}
            <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl flex items-center gap-3 text-sm">
              <div className="w-6 h-6 bg-red-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">!</div>
              <div>
                <strong>Overdue Task</strong><br />
                You have 1 overdue task!
              </div>
            </div>
          </div>
        </div>

        {/* Add Task Form */}
        <div className="px-8 pb-6">
          <div className="flex gap-3 bg-white p-2 rounded-3xl shadow-sm border border-gray-100">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="flex-1 px-6 py-4 bg-transparent focus:outline-none text-lg placeholder-gray-400"
            />
            <input
              type="date"
              value={newDeadline}
              onChange={(e) => setNewDeadline(e.target.value)}
              className="px-6 py-4 bg-transparent focus:outline-none border-l border-gray-200 text-gray-600"
            />
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 rounded-3xl flex items-center gap-2 font-medium transition-colors"
              onClick={addTask}
            >
              Add Task <span className="text-xl">+</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs + Sort */}
        <div className="px-8 pt-3 pb-4 border-b border-gray-100 bg-white flex items-center">
          <div className="flex gap-1 text-sm">
            <button className="px-6 py-2 bg-violet-600 text-white rounded-2xl font-medium">All</button>
            <button className="px-6 py-2 hover:bg-gray-100 rounded-2xl text-gray-600 transition-colors">Active</button>
            <button className="px-6 py-2 hover:bg-gray-100 rounded-2xl text-gray-600 transition-colors">Completed</button>
            <button className="px-6 py-2 hover:bg-gray-100 rounded-2xl text-gray-600 transition-colors">Overdue</button>
          </div>

          <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
            Sort by:
            <select className="bg-transparent border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none cursor-pointer">
              <option>Deadline (Soonest)</option>
              <option>Deadline (Latest)</option>
            </select>
          </div>
        </div>

        {/* Task List */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="space-y-4">
            {tasks.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                No tasks yet. Add one above!
              </div>
            ) : (
              tasks.map(task => (
                < TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleComplete}
                  onDelete={deleteTask}
                />
              ))
            )}



          </div>
        </div>




      </div>
    </div>
  );
}

export default App;