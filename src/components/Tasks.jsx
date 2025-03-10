import { ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
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
          <button
            onClick={() => {
              onSeeDetailsClick(task);
            }}
            className="bg-inner-container-bg text-white rounded-md p-2"
          >
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
