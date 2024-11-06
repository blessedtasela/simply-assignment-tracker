import { assignmentUseStore } from "../../models/store";
import { Assignment } from "../Assignment";

export function Assignments() {
  const completedAssignments = assignmentUseStore((state) => state.completedAssignments);
  const assignmentsList = assignmentUseStore((state) => state.assignmentsList);
 
  return (
    <section className='px-12 -mt-12' >
      <header className='flex items-center justify-between'>
        <div className="text-purple-300 flex gap-4">
          <p>Created Assignments</p>
          <span className="bg-gray-700 px-2 rounded-lg text-gray-100">{assignmentsList.length}</span>
        </div>

        <div className="text-purple-400 flex gap-4">
          <p className={""}>Completed Assignments</p>
          <span className="bg-gray-700 px-2 rounded-lg text-gray-100">
            {completedAssignments} of {assignmentsList.length}
          </span>
        </div>
      </header>

      <div>
        {assignmentsList.map((list, index) => (
          <Assignment
            assignment={list}
            index={index}
            key={list.assignment}
          />
        ))}
      </div>
    </section>
  );
}
