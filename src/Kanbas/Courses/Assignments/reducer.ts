import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
<<<<<<< HEAD
const assignmentsSlice = createSlice({
=======
const assignmentSlice = createSlice({
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
<<<<<<< HEAD
        description: assignment.description,
        points: assignment.points,
        assignmentGroup: assignment.assignmentGroup,
        gradeAs: assignment.gradeAs,
        submissionType: assignment.submissionType,
        onlineEntryOptions: assignment.onlineEntryOptions,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        course: assignment.course,
=======
        course: assignment.course,
        available_date: assignment.available_date,
        available_until: assignment.available_until,
        due_date: assignment.due_date,
        points: assignment.points,
        description: assignment.description,
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
<<<<<<< HEAD
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
=======
  assignmentSlice.actions;
export default assignmentSlice.reducer;
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
