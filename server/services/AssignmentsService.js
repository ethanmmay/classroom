import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AssignmentsService {

  async find(query = {}) {
    // One Database Call. Large Query String that returns the data from the classroom with that Id
    return await dbContext.Assignments.find(query).populate("classroom", "room title") 
  }

//   async findById(id) {
//     let classroom = await dbContext.Assignments.findById(id);
//     if (!classroom) {
//       throw new BadRequest("Invalid Id");
//     }
//     return classroom;
//   }

  async create(data) {
    return await dbContext.Assignments.create(data)
  }

}

export const assignmentsService = new AssignmentsService();