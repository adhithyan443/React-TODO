function TaskForm({ newTitle, setNewTitle, newDeadline, setNewDeadline, newLabel, setNewLabel, onAddTask }) {

    return (
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

                <select
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    className="px-6 py-4 bg-transparent focus:outline-none border-l border-gray-200 text-gray-600 rounded-r-3xl"
                >
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>

                <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 rounded-3xl flex items-center gap-2 font-medium transition-colors"
                    onClick={onAddTask}
                >
                    Add Task <span className="text-xl">+</span>
                </button>
            </div>
        </div>
    );
}

export default TaskForm;