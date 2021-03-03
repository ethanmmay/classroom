import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StudentsService {

  async find(query = {}) {
    // One Database Call. Large Query String that returns the data from the classroom with that Id
    return await dbContext.Students.find(query).populate("classroom", "room title") 
  }

//   async findById(id) {
//     let classroom = await dbContext.Students.findById(id);
//     if (!classroom) {
//       throw new BadRequest("Invalid Id");
//     }
//     return classroom;
//   }

  async create(data) {
    return await dbContext.Students.create(data)
  }

}

export const studentsService = new StudentsService();