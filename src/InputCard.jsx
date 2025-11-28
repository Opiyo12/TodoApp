import { useState } from "react";
import Modal from "./Modal"; // your modal component
import { FaEdit } from "react-icons/fa";

function InputCard() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Add a new task
  function saveTaskList() {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTaskList((prev) => [...prev, newTask]);
    setTaskInput("");
  }

  // Delete task
  function deleteTask(id) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  // Toggle completed
  function toggleCompleteBtn(id) {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Open modal and set selected task
  function showEditModal(task) {
    setSelectedTask(task); // track which task is being edited
    setIsOpen(true);
  }

  function closeEditModal() {
    setIsOpen(false);
    setSelectedTask(null);
  }

  // Save changes from modal
  function saveEditedTask() {
    if (!selectedTask.text.trim()) return; // prevent empty edit
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === selectedTask.id ? selectedTask : task
      )
    );
    closeEditModal();
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
                  onChange={() => toggleCompleteBtn(task.id)}
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
                <button
                  className="text-green-600 font-medium hover:underline flex items-center gap-1"
                  onClick={() => showEditModal(task)}
                >
                  <FaEdit size={16} /> Edit
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

      {/* Edit Modal */}
      {isOpen && selectedTask && (
        <Modal isOpen={isOpen} onClose={closeEditModal}>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <FaEdit size={18} />
              <h2 className="text-md font-semibold">Edit Task</h2>
            </div>

        <input
        type="text"
        value={selectedTask.text}
        onChange={(e) =>
          setSelectedTask({ ...selectedTask, text: e.target.value })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveEditedTask(); // call your save function
          }
        }}
        className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

            <div className="flex justify-end gap-2">
              <button
                onClick={closeEditModal}
                className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={saveEditedTask}
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default InputCard;
