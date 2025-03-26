import { ChevronLeft, Pencil, Save } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  useEffect(() => {
    setEditedTitle(title);
    setEditedDescription(description);
  }, [title, description]);

  const handleSave = () => {
    if (!editedTitle.trim() || !editedDescription.trim()) {
      alert("Please fill out both fields!");
      return;
    }

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = storedTasks.map((task) => {
      if (task.id.toString() === id) {
        return {
          ...task,
          title: editedTitle,
          description: editedDescription,
        };
      }
      return task;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Atualiza a URL com os novos valores e mantém na mesma página
    const newParams = new URLSearchParams();
    newParams.set("id", id);
    newParams.set("title", editedTitle);
    newParams.set("description", editedDescription);
    navigate(`/task?${newParams.toString()}`, { replace: true }); // Modificação aqui

    setIsEditing(false); // Sai do modo de edição
  };

  return (
    <div className="w-screen h-screen bg-body-bg flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="text-white absolute left-0 top-0 bottom-0"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />
          </button>

          <div className="w-full flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-center text-3xl text-title-text font-bold">
                Details
              </h1>
            </div>
            <button
              onClick={() => {
                if (isEditing) {
                  handleSave();
                } else {
                  setIsEditing(true);
                }
              }}
              className="text-white hover:text-addtask-button-bg transition-colors ml-auto"
            >
              {isEditing ? <Save size={20} /> : <Pencil size={20} />}
            </button>
          </div>
        </div>

        <div className="space-y-4 p-6 rounded-md bg-out-container-bg flex flex-col break-words">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="bg-inner-container-bg text-white p-2 rounded-md mb-4"
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="bg-inner-container-bg text-white p-2 rounded-md h-32"
              />
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold">{editedTitle}</h2>
              <p className="whitespace-pre-line">{editedDescription}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
