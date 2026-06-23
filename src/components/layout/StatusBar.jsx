

function StatsBar({ tasks, isOverdue }) {

    const total = tasks.length;
    const active = tasks.filter(t => !t.completed).length;
    const completed = tasks.filter(t => t.completed).length;
    const overdue = tasks.filter(t => !t.completed && isOverdue(t.deadline)).length; // We'll pass isOverdue

    return (
        <div className="border-t border-gray-100 bg-white p-4 flex gap-6">
            <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-gray-800">{total}</div>
                <div className="text-xs text-gray-500">Total Tasks</div>
            </div>
            <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-blue-600">{active}</div>
                <div className="text-xs text-gray-500">Active</div>
            </div>
            <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-green-600">{completed}</div>
                <div className="text-xs text-gray-500">Completed</div>
            </div>
            <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-red-600">{overdue}</div>
                <div className="text-xs text-gray-500">Overdue</div>
            </div>
        </div>
    );
}


export default StatsBar;