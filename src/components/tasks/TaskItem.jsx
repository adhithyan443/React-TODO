
function TaskItem({ task, onToggle, onDelete,isOverdue }) {


    return (
        
        <div className="bg-white rounded-3xl p-5 flex items-center gap-4 border border-gray-100 hover:shadow-md transition-shadow group">
            
           <div className={`w-1 h-12 rounded-full -ml-1 ${!task.completed && isOverdue(task.deadline) ? 'bg-red-500' : 'bg-green-300'}`}></div>

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
                <p className="text-sm text-gray-500">{task.label}</p>
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