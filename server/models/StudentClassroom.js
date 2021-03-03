import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const StudentClassroom = new Schema(
  {
    student: { type: ObjectId, ref: "Student", required: true },
    classroom: { type: ObjectId, ref: "Classroom", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default StudentClassroom;
