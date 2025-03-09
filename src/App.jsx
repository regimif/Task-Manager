import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Wash Socks",
      description: "Wash all the socks in the house",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Meeting at School",
      description: "Meeting with the principal",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Food Shopping",
      description: "Buy groceries for the week",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-body-bg flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-center text-3xl text-slate-100 font-bold">
          Task Manager
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
