import TaskItem from "./TaskItem";

function TaskList({ filteredTasks, onToggle, onDelete, isOverdue, onEdit }) {
    return (
        <div className="flex-1 p-8 overflow-auto">
            <div className="space-y-4">
                {filteredTasks.length === 0 ? (
                    <div className="text-center py-16 text-gray-400">
                        No tasks yet. Add one above!
                    </div>
                ) : (

                    filteredTasks.map(task => (
                        < TaskItem
                            key={task.id}
                            task={task}
                            onToggle={onToggle}
                            onDelete={onDelete}
                            isOverdue={isOverdue}
                            onEdit={onEdit}
                        />
                    ))
                )}



            </div>
        </div>
    );
}

export default TaskList;