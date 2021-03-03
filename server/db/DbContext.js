import ClassroomSchema from "../models/Classroom";
import mongoose from "mongoose";

class DbContext {
  Classrooms = mongoose.model("Classroom", ClassroomSchema);
}

export const dbContext = new DbContext();
