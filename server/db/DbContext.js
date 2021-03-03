import ClassroomSchema from "../models/Classroom";
import AssignmentSchema from "../models/Assignment";
import StudentClassroomSchema from "../models/StudentClassroom";
import StudentSchema from "../models/Student";
import mongoose from "mongoose";

class DbContext {
  Classrooms = mongoose.model("Classroom", ClassroomSchema);
  Assignments = mongoose.model("Assignment", AssignmentSchema);
  StudentClassroom = mongoose.model("StudentClassroom", StudentClassroomSchema);
  Students = mongoose.model("Student", StudentSchema);
}

export const dbContext = new DbContext();
