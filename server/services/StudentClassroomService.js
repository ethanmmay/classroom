import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StudentClassroomService {

  async find(query = {}) {
    // One Database Call. Large Query String that returns the data from the classroom with that Id
    return await dbContext.StudentClassroom.find(query).populate("student classroom") 
  }

//   async findById(id) {
//     let classroom = await dbContext.StudentClassroom.findById(id);
//     if (!classroom) {
//       throw new BadRequest("Invalid Id");
//     }
//     return classroom;
//   }

  async create(data) {
    return await dbContext.StudentClassroom.create(data)
  }

  async findOnlyClasses(id) {
    return await dbContext.StudentClassroom.find(id).populate("classroom")
  }

}

export const studentclassroomService = new StudentClassroomService();