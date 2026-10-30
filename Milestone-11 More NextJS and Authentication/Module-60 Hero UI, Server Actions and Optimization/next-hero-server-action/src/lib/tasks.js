import tasks from "../data/tasks.json";

export const getTasks = async () => {
    return tasks;
};

export const postTask = async (newTask) => {
    tasks.push(newTask);

    return { ok: true, message: "Task added successfully" };
};
