import { ChevronRight, Delete, Trash } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 rounded-md bg-out-container-bg">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full text-left bg-inner-container-bg text-white rounded-md p-2 ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-inner-container-bg text-white rounded-md p-2">
            <ChevronRight />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-inner-container-bg text-white rounded-md p-2"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
