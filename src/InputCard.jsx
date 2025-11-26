import { useState } from "react";

function InputCard() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  function saveTaskList() {
    if (taskInput.trim() === "") return;
    const newTask =                                                                                                   {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTaskList((prev) => [...prev, newTask]);
    setTaskInput("");
  }

  function deleteTask(id) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  function toogleCompleteBtn(id) {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        {/* Input section */}
        <div className="max-w-md mx-auto bg-white p-5 rounded-xl shadow-md flex items-center gap-2">
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            type="text"
            placeholder="Enter task"
            className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={saveTaskList}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Save
          </button>
        </div>

        {/* Task List */}
        <div className="max-w-md mx-auto mt-5 space-y-3">
          {taskList.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border"
            >
              {/* left side: checkbox + text */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toogleCompleteBtn(task.id)}
                  className="h-5 w-5 accent-blue-500"
                />

                <span
                  className={`font-medium text-sm ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {task.text}
                </span>
              </div>

              {/* right side: actions */}
              <div className="flex items-center gap-4">
                <button className="text-green-600 font-medium hover:underline">
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 font-medium hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InputCard;
