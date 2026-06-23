/* export default function ToDo({ task, isDone }) {
    return <li>Task: {task}</li>;
}
 */

/* export default function ToDo({ task, isDone }) {
    if (isDone) {
        return <li>Done: {task}</li>;
    } else {
        return <li>Pending: {task}</li>;
    }
} */
/* export default function ToDo({ task, isDone, time = 0 }) {
    if (isDone) {
        return (
            <li>
                Done: {task} Duration: {time}
            </li>
        );
    }
    return <li>Pending: {task}</li>;
} */

// conditional rendering 3: ternary
// condition ? true : false

/* export default function ToDO({ task, isDone, time = 0 }) {
    return isDone ? (
        <li>
            Done: {task} time: {time}
        </li>
    ) : (
        <li>Not Done: {task}</li>
    );
} */

// conditional rendering 4: &&

/* export default function ToDO({ task, isDone, time = 0 }) {
    return (
        isDone && (
            <li>
                Done: {task} time: {time}
            </li>
        )
    );
} */

// conditional rendering 5: ||

/* export default function ToDO({ task, isDone, time = 0 }) {
    return (
        isDone || (
            <li>
                Done: {task} time: {time}
            </li>
        )
    );
} */

// conditional rendering 6: use variable

export default function ToDo({ task, isDone, time }) {
    const displayTime = time ? time : 100;
    let listItem;

    if (isDone === true) {
        listItem = (
            <li>
                Time: {time} Time: {displayTime}
            </li>
        );
    } else {
        listItem = <li>Pending: {task}</li>;
    }

    return listItem;
}
