import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

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
          <h1 className="text-center text-3xl text-slate-100 font-bold">
            Task Manager
          </h1>
        </div>

        <div className="space-y-4 p-6 rounded-md bg-out-container-bg flex flex-col">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
