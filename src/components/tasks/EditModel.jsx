import { useState } from "react";

function EditModel({ task, onSave, onCancel }) {

    const [title, setTitle] = useState(task.title);
    const [deadline, setDeadline] = useState(task.deadline);
    const [label, setLabel] = useState(task.label);

    const handleSave = () =>{
        onSave({...task,title,deadline,label});
    }

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Edit Task</h2>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-4 border rounded-2xl mb-4"
                    placeholder="Task title"
                />

                <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-4 border rounded-2xl mb-4"
                />

                <select
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full p-4 border rounded-2xl mb-6"
                >
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="Other">Other</option>
                </select>

                <div className="flex gap-3">
                    <button onClick={onCancel} className="flex-1 py-4 border rounded-2xl">Cancel</button>
                    <button onClick={handleSave} className="flex-1 py-4 bg-violet-600 text-white rounded-2xl">Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default EditModel;