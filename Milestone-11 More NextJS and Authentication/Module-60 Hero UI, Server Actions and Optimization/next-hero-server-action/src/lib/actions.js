import { revalidatePath, revalidateTag } from "next/cache";
import { getTasks, postTask } from "./tasks";

export const createATask = async (formData) => {
    "use server";

    const tasks = await getTasks();

    const task = {
        id: tasks.length + 1,
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        priority: formData.get("priority"),
        status: formData.get("status"),
        dueDate: formData.get("dueDate"),
        completed: false,
    };

    const res = await postTask(task);
    if (res.ok) {
        revalidatePath("/tasks");
        // redirect("/");
        // revalidateTag("tasks")
    }
    return res;
};
