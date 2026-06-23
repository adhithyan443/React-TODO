
function SideBar() {
    return (
        /* ====================== SIDEBAR ====================== */ 
        < div className = "w-72 bg-white border-r border-gray-200 flex flex-col" >

            <div className="p-6 flex flex-col h-full">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-9 h-9 bg-violet-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-violet-700">ToDoList</h1>
                        <p className="text-xs text-gray-500 -mt-1">Stay organized, get things done.</p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="space-y-1 mb-8">
                    <div className="flex items-center gap-3 px-4 py-3 bg-violet-50 text-violet-700 rounded-2xl font-medium cursor-pointer">
                        <span>All Tasks</span>
                        <span className="ml-auto bg-white px-2.5 py-0.5 rounded-full text-xs">7</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer">
                        <span>Today</span>
                        <span className="ml-auto text-gray-500 text-sm">2</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer">
                        <span>Upcoming</span>
                        <span className="ml-auto text-gray-500 text-sm">3</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer">
                        <span>Active</span>
                        <span className="ml-auto text-gray-500 text-sm">3</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer">
                        <span>Completed</span>
                        <span className="ml-auto text-gray-500 text-sm">2</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl cursor-pointer">
                        <span>Overdue</span>
                        <span className="ml-auto text-gray-500 text-sm">1</span>
                    </div>
                </div>

                {/* Labels */}
                <div className="px-4 mt-2">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Labels</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-2xl cursor-pointer">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm">Work</span>
                            <span className="ml-auto text-gray-500 text-sm">3</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-2xl cursor-pointer">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-sm">Personal</span>
                            <span className="ml-auto text-gray-500 text-sm">2</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-2xl cursor-pointer">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                            <span className="text-sm">Health</span>
                            <span className="ml-auto text-gray-500 text-sm">1</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-2xl cursor-pointer">
                            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                            <span className="text-sm">Other</span>
                            <span className="ml-auto text-gray-500 text-sm">1</span>
                        </div>
                    </div>
                </div>

                {/* Theme Toggle */}
                <div className="mt-auto border-t border-gray-200 pt-6">
                    <div className="flex bg-gray-100 rounded-2xl p-1 text-sm">
                        <button className="flex-1 py-2.5 rounded-[14px] bg-white shadow-sm text-gray-700 font-medium">
                            ☀️ Light
                        </button>
                        <button className="flex-1 py-2.5 text-gray-500 hover:text-gray-700">
                            🌙 Dark
                        </button>
                    </div>
                </div>
            </div>
      </div >
    );
}

export default SideBar;