import AddTask from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div className="px-2">
            <h2 className="my-4">Total Tasks: {tasks.length}</h2>
            <div className="flex justify-center items-center mb-4">
                <AddTask createATask={createATask}></AddTask>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;