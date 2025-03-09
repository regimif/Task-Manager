import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 rounded-md bg-out-container-bg flex flex-col">
      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-2 border border-gray-400 rounded-lg mb-4 font-medium"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="w-full p-2 border border-gray-400 rounded-lg mb-4 placeholder:font-medium"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Please fill out both fields.");
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="w-full bg-addtask-button-bg text-white p-2 rounded-lg"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTasks;
