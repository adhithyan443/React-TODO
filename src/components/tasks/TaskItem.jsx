
function TaskItem({ task, onToggle, onDelete, isOverdue, onEdit }) {

    const overdue = !task.completed && isOverdue(task.deadline);

    const statusColor = task.completed
        ? 'bg-green-500'
        : overdue
            ? 'bg-red-500'
            : 'bg-violet-600';

    return (

        <div className="bg-white rounded-3xl p-5 flex items-center gap-4 border border-gray-100 hover:shadow-md transition-shadow group">

            <div className={`w-1 h-12 rounded-full -ml-1 ${statusColor}`}></div>

            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="w-5 h-5 accent-violet-600 cursor-pointer"
            />

            <div className="flex-1 min-w-0">
                <p className={`font-medium text-gray-800 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    {task.title}
                </p>

                <div className="flex items-center gap-2 mt-1">
                    {overdue && (
                        <span className="inline-block px-3 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                            Overdue
                        </span>
                    )}

                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                        <span
                            className={`w-2.5 h-2.5 rounded-full ${task.label === 'Work' ? 'bg-blue-500' :
                                task.label === 'Personal' ? 'bg-green-500' :
                                    task.label === 'Health' ? 'bg-purple-500' :
                                        'bg-gray-500'
                                }`}
                        ></span>
                        {task.label}
                    </span>
                </div>



            </div>

            {task.deadline && (
                <div className="text-right">
                    <div className="text-red-600 text-sm font-medium">{task.deadline}</div>
                </div>
            )}

            <div className="flex items-center gap-1 ">
                <button
                    onClick={() => onEdit(task)}
                    className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line-icon lucide-pen-line"><path d="M13 21h8" /><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /></svg>
                </button>
                <button
                    className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-red-500"
                    onClick={() => onDelete(task.id)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                </button>
            </div>
        </div>

    )
}

export default TaskItem;