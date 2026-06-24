function FilterBar({ filter, setFilter,sortBy,setSortBy }) {
    return (

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

    );
}

export default FilterBar;