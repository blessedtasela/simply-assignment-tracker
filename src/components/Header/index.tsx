
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useId, useRef, useState } from "react";
import { DatePicker } from "../DatePicker";
import { uppercase } from "../../helpers/helper";
import { assignmentUseStore, TAssignment } from "../../models/store";

export function Header() {
  const inputId = useId();
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [assignment, setAssignment] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const totalAssignments = assignmentUseStore((state) => state.assignmentsList.length);
  const assignmentsList = assignmentUseStore((state) => state.assignmentsList);
  const AddAssignment = assignmentUseStore((state) => state.addAssignment);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const assignmentObject: TAssignment = {
      id: totalAssignments + 1,
      assignment: assignment,
      completed: false,
      dueDate: selectedDate,
    }

    const assignmentExists = (assignment: string) => {
      return assignmentsList.find((item) => item.assignment === assignment)
    }

    if (assignmentExists(assignment)) {
      setError("Assignment exists! Please add a different entry.")
      return;
    }

    // const newAssigmentList: TAssignment[] = [...assignmentsList, assignmentObject];
    AddAssignment(assignmentObject);
    setAssignment("");
    setSelectedDate(undefined);
    setError("")
    setDisableButton(true);
  }

  const updateAssignment = (val: string) => {
    if (val.startsWith(" ")) {
      console.log("i am trimmed")
      val = val.trimStart();
      setError("Must enter an assignemt!");
    }

    setAssignment(val)
    validateSubmitButton(val, selectedDate)
  }

  const handleDayPickerSelect = (date: Date) => {
    if (!date) {
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
    }

    validateSubmitButton(assignment, date)
    dialogRef.current?.close();
  };

  function validateSubmitButton(val?: string, date?: Date) {
    if (val?.trim() !== '' && date !== undefined) {
      setDisableButton(false);
      setError("");
    } else if (val?.trim() === '') {
      setDisableButton(true);
      setError("Must enter an assignemt!");
    } else if (date === undefined) {
      setDisableButton(true);
      setError("Please choose a due date.");
    } else {
      setError("Unknown Error.");
    }
  }

  return (
    <header className='p-12 py-20'>
      {/* This is simply to show you how to use helper functions */}
      <h1 className="text-4xl text-white font-bold flex items-center justify-center">
        <span className="text-purple-500 mx-4">{uppercase("simply")} </span>  Assignment Tracker
      </h1>
      <div className='text-red-600 font-bold text-md ml-12 mt-12 -mb-8'>{error}</div>
      <form className='text-sm text-white font-bold flex items-center justify-space-between p-12'
        onSubmit={handleFormSubmit}>
        <input
          className="p-4 rounded-md min-w-48 w-full bg-gray-600 text-gray-100"
          placeholder="Add a new assignment"
          type="text"
          id={inputId}
          value={assignment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateAssignment(e.target.value)}
        />
        <div className="p-2">
          <DatePicker
            dueDate={selectedDate}
            onSelect={handleDayPickerSelect}
            dialogRef={dialogRef}
          />
        </div>

        <button disabled={disableButton}
          className={
            disableButton
              ? "bg-gray-400 max-w-36 p-4 rounded-md flex items-center gap-4"
              : "bg-purple-400 max-w-36 p-4 rounded-md flex items-center gap-4"
          }
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
