import { Calendar, CircleCheck, Tag } from "@gravity-ui/icons";
import { Card, Chip } from "@heroui/react";

const priorityColor = {
    low: "success",
    medium: "warning",
    high: "danger",
};

const statusColor = {
    pending: "warning",
    "in-progress": "accent",
    "in progress": "accent",
    completed: "success",
};

const statusLabel = {
    pending: "Pending",
    "in-progress": "In Progress",
    "in progress": "In Progress",
    completed: "Completed",
};

const capitalize = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);

const formatDate = (date) => {
    if (!date) return "No due date";
    return new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC", // keeps "2026-11-05" from shifting a day
    });
};

const TasksCard = ({ task }) => {
    const { id, title, description, dueDate, category, priority, status, completed } = task;

    return (
        <Card variant="primary" className="border-2 border-primary">
            <Card.Header className="flex flex-row items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                    <Card.Title className={completed ? "line-through opacity-60" : ""}>
                        {title}
                    </Card.Title>
                    {id !== undefined && (
                        <span className="text-xs text-muted">Task #{id}</span>
                    )}
                </div>

                <Chip
                    size="sm"
                    variant="soft"
                    color={priorityColor[priority] ?? "default"}
                >
                    {capitalize(priority)} priority
                </Chip>
            </Card.Header>

            <Card.Content className="flex flex-col gap-4">
                <Card.Description>{description}</Card.Description>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    <span className="flex items-center gap-1.5">
                        <Tag className="size-4 text-muted" />
                        {capitalize(category)}
                    </span>

                    <span className="flex items-center gap-1.5">
                        <Calendar className="size-4 text-muted" />
                        Due {formatDate(dueDate)}
                    </span>
                </div>
            </Card.Content>

            <Card.Footer className="flex items-center justify-between">
                <Chip
                    size="sm"
                    variant="soft"
                    color={statusColor[status] ?? "default"}
                >
                    {statusLabel[status] ?? capitalize(status)}
                </Chip>

                <span className="flex items-center gap-1.5 text-sm">
                    <CircleCheck
                        className={`size-4 ${completed ? "text-success" : "text-muted"}`}
                    />
                    {completed ? "Done" : "Not done"}
                </span>
            </Card.Footer>
        </Card>
    );
};

export default TasksCard;