import { useEffect, useState } from "react";
import SideBar from "./components/layout/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";
import StatsBar from "./components/layout/StatusBar";
import EditModel from "./components/tasks/EditModel";


function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  const [newTitle, setNewTitle] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [newLabel, setNewLabel] = useState('Personal');
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('deadline-asc')


  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDeadline, setEditDeadline] = useState('');
  const [editLabel, setEditLabel] = useState('Personal');



  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const addTask = () => {

    if (!newTitle.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: newTitle,
      deadline: newDeadline || '',
      completed: false,
      label: newLabel
    };


    setTasks([...tasks, newTask]);
    setNewTitle('');
    setNewDeadline('');
    setNewLabel('Personal');

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

  const isOverdue = (deadline) => {
    if (!deadline) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const due = new Date(deadline);
    return due < today
  }


  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    if (filter === 'Overdue') return !task.completed && isOverdue(task.deadline);

    //Label Filter
    
    if (filter === "Work")
      return task.label === "Work";

    if (filter === "Personal")
      return task.label === "Personal";

    if (filter === "Health")
      return task.label === "Health";

    if (filter === "Other")
      return task.label === "Other";
    return true;
  });


  useEffect(() => {
    const overdueCount = tasks.filter(task => !task.completed && isOverdue(task.deadline)).length;
    if (overdueCount > 0) {
      toast.error(`You have ${overdueCount} overdue task(s)!`, {
        duration: 5000,
        icon: '⚠️',
      });
    }
  }, [tasks]);



  const sortedTask = [...filteredTasks].sort((a, b) => {
    if (!a.deadline) return 1;
    if (!b.deadline) return -1;

    const dateA = new Date(a.deadline);
    const dateB = new Date(b.deadline);

    return sortBy === 'deadline-asc' ? dateA - dateB : dateB - dateA;

  })


  const startEdit = (task) => {
    setEditingTask(task)
    setEditTitle(task.title);
    setEditDeadline(task.deadline || '');
    setEditLabel(task.label);
  };

  const saveEdit = () => {
    if (!editTitle.trim() || !editingTask) return;

    const updatedTasks = tasks.map(task =>
      task.id === editingTask.id
        ? {
          ...task,
          title: editTitle,
          deadline: editDeadline,
          label: editLabel
        }
        : task
    );

    setTasks(updatedTasks);
    setEditingTask(null);        // Close edit mode
    setEditTitle('');
    setEditDeadline('');
    setEditLabel('Personal');
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditTitle('');
    setEditDeadline('');
    setEditLabel('Personal');
  };






  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      <SideBar
        tasks={tasks}
        filter={filter}
        setFilter={setFilter}
        isOverdue={isOverdue}
      />

      {/* ====================== MAIN CONTENT ====================== */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="p-8 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
              <p className="text-gray-500 mt-1">Here's what's on your plate today.</p>
            </div>


          </div>
        </div>

        {/* Add Task Form */}
        <TaskForm
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newDeadline={newDeadline}
          setNewDeadline={setNewDeadline}
          newLabel={newLabel}
          setNewLabel={setNewLabel}
          onAddTask={addTask}
        />

        {/* Filter Tabs + Sort */}
        <div className="px-8 pt-3 pb-4 border-b border-gray-100 bg-white flex items-center">
          <div className="flex gap-1 text-sm">
            <button
              onClick={() => setFilter('All')}
              className={`px-6 py-2 rounded-2xl font-medium ${filter === 'All' ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              All
            </button>

            <button
              onClick={() => setFilter('Active')}
              className={`px-6 py-2 rounded-2xl font-medium ${filter === 'Active' ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              Active
            </button>

            <button
              onClick={() => setFilter('Completed')}
              className={`px-6 py-2 rounded-2xl font-medium ${filter === 'Completed' ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              Completed
            </button>

            <button
              onClick={() => setFilter('Overdue')}
              className={`px-6 py-2 rounded-2xl font-medium ${filter === 'Overdue' ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              Overdue
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
            Sort by:
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-gray-200 rounded-xl px-3 py-2 text-gray-700 focus:outline-none cursor-pointer"
            >
              <option value="deadline-asc">Deadline (Soonest)</option>
              <option value="deadline-desc">Deadline (Latest)</option>

            </select>
          </div>
        </div>

        {/* Task List */}
        <TaskList
          filteredTasks={sortedTask}
          onToggle={toggleComplete}
          onDelete={deleteTask}
          isOverdue={isOverdue}
          onEdit={startEdit}

        />

        <StatsBar
          tasks={tasks}
          isOverdue={isOverdue}
        />

      </div>

      {editingTask && (
        <EditModel
          task={editingTask}
          onSave={(updatedTask) => {
            const updatedTasks = tasks.map(t =>
              t.id === updatedTask.id ? updatedTask : t
            );
            setTasks(updatedTasks);
            setEditingTask(null);
          }}
          onCancel={() => setEditingTask(null)}
        />
      )}

      <Toaster position="top-right" />

    </div>
  );
}

export default App;