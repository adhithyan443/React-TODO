function Header() {
    return (
        <div className="p-8 pb-4">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
                    <p className="text-gray-500 mt-1">Here's what's on your plate today.</p>
                </div>


            </div>
        </div>
    );
}

export default Header;