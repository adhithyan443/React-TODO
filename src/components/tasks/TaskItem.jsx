
function TaskItem({ task, onToggle, onDelete, isOverdue }) {

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
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        {task.label}
                    </span>
                </div>



            </div>

            {task.deadline && (
                <div className="text-right">
                    <div className="text-red-600 text-sm font-medium">{task.deadline}</div>
                </div>
            )}

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-600">✏️</button>
                <button
                    className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-red-500"
                    onClick={() => onDelete(task.id)}
                >
                    🗑️
                </button>
            </div>
        </div>

    )
}

export default TaskItem;