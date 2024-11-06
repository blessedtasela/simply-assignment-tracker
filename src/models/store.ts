import { create } from "zustand";

export type TAssignment = {
    id: number;
    assignment: string;
    completed: boolean;
    dueDate: Date | undefined;
}

export type TDate = {
    dueDate: Date | undefined;
}

export interface DatePickerProps {
    dueDate: Date | undefined;
    onSelect: (date: Date) => void;
    dialogRef: React.RefObject<HTMLDialogElement>;
}

export type TAssignmentsListProps = {
    assignmentsList: TAssignment[];
    setAssignmentsList: React.Dispatch<React.SetStateAction<TAssignment[]>>;
    setCompletedAssignment: React.Dispatch<React.SetStateAction<number>>;
}

export type AssignmentListsHeaderProps = {
    assignmentsList: TAssignment[];
    setAssignmentsList: React.Dispatch<React.SetStateAction<TAssignment[]>>;
}

export type AssignmentProps = {
    assignment: TAssignment;
    index: number
}

type TAssignmentStore = {
    assignmentsList: TAssignment[];
    completedAssignments: number;
    addAssignment: (assignment: TAssignment) => void;
    removeAssignment: (id: number) => void;
    toggleCompleted: (index: number) => void;
};

const countCompletedAssignments = (assignments: TAssignment[]) =>
    assignments.filter((assignment) => assignment.completed === true).length;

const saveToLocalStorage = (assignments: TAssignment[]) => {
    localStorage.setItem('assignmentsList', JSON.stringify(assignments))
}

const loadFromLocalStorage = (): TAssignment[] => {
    const assignments = localStorage.getItem("assignmentsList")
    return assignments ? JSON.parse(assignments) : [];
}


export const assignmentUseStore = create<TAssignmentStore>((set) => {

    const initAssignments = loadFromLocalStorage();

    return {
        assignmentsList: initAssignments,
        completedAssignments: countCompletedAssignments(initAssignments),
        addAssignment: (assignment: TAssignment) =>
            set((state) => {
                const newAssignments = [...state.assignmentsList, assignment];
                saveToLocalStorage(newAssignments)
                return { assignmentsList: newAssignments, completedAssignments: countCompletedAssignments(newAssignments) };
            }),
        removeAssignment: (id: number) =>
            set((state) => {
                const updatedList = state.assignmentsList.filter((assignment) => assignment.id !== id);
                saveToLocalStorage(updatedList)
                return { assignmentsList: updatedList, completedAssignments: countCompletedAssignments(updatedList) };
            }),
        toggleCompleted: (index: number) => set((state) => {
            const updatedAssignments = state.assignmentsList.map((assignment, idx) =>
                index === idx ? { ...assignment, completed: !assignment.completed } : assignment);
            saveToLocalStorage(updatedAssignments)
            return { assignmentsList: updatedAssignments, completedAssignments: countCompletedAssignments(updatedAssignments) }
        }),
        clearAllAssignments: () => set(() => {
            localStorage.removeItem("assignmentsList");
            return { assignmentsList: [], completedAssignments: 0 }
        })
    }
})