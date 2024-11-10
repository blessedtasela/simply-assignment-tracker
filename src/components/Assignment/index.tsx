import { AssignmentProps, assignmentUseStore } from "../../models/store";
import { TbCircle, TbCircleCheckFilled, TbTrash } from "react-icons/tb";


export function Assignment({ assignment, index }: AssignmentProps) {

    const deleteAssignment = assignmentUseStore((state) => state.removeAssignment);
    const handleCompleted = assignmentUseStore((state) => state.toggleCompleted);

    const formatDate = (date: Date | undefined) => {
        if (date === undefined) {
            return "Cannot parse date";
        }

        const currentDate: Date = new Date();
        const dueDate: Date = new Date(date);

        // Set the time of both dates to the start of the day for accurate comparison
        currentDate.setHours(0, 0, 0, 0);
        dueDate.setHours(0, 0, 0, 0);

        // Calculate the difference in time between the two dates
        const timeDifference: number = dueDate.getTime() - currentDate.getTime();

        // Calculate the difference in days
        const dayDifference: number = Math.ceil(timeDifference / (1000 * 3600 * 24));

        if (dayDifference < 1) {
            return "Due: now"
        } else if (dayDifference === 1) {
            return "Due: tommorrow"
        } else {
            return `Due: in ${dayDifference} days`
        }
    }

    const checkDueDate = (date: Date | undefined) => {
        if (date === undefined) {
            return "";
        }

        const currentDate = new Date();
        const dueDate = new Date(date);

        currentDate.setHours(0, 0, 0, 0);
        dueDate.setHours(0, 0, 0, 0);

        const timeDifference = dueDate.getTime() - currentDate.getTime();
        const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        if (dayDifference === 1) {
            return "dueNow";
        } else if (dayDifference > 1) {
            return "dueDate";
        } else {
            return "duePast";
        }

    }

    return (
        <div className='flex items-center justify-between bg-gray-600 p-4 rounded-lg text-white mt-4'>
            <div className="flex justify-space-between items-center gap-4">
                <button className='text-blue-500'
                    onClick={() => handleCompleted(index)}>
                    {
                        assignment.completed == true ? <TbCircleCheckFilled size={20} /> : <TbCircle size={20} />
                    }

                </button>
                <div />
                <p className={assignment.completed ? "text-gray-300 line-through" : "text-white"}>
                    {assignment.assignment}
                </p>
            </div>
            <div className="flex gap-4 ml-2">
                <p className={checkDueDate(assignment.dueDate) === "dueNow" ? "bg-red-600 px-4 p-1 rounded-full flex-items-center justify-center" :
                    (checkDueDate(assignment.dueDate) === "duePast"
                        ? "bg-green-600 px-4 p-1 rounded-full flex-items-center justify-center"
                        : "bg-gray-700 px-4 p-1 rounded-full flex-items-center justify-center")}>
                    {formatDate(assignment.dueDate)}
                </p>

                <button className='text-gray-400' onClick={() => deleteAssignment(assignment.id)}>
                    <TbTrash size={20} onClick={(e) => {
                        e.preventDefault()
                    }} />
                </button>
            </div>

        </div>
    );
}
