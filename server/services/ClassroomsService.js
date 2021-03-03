import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ClassroomsService {

  async find(query = {}) {
    return await dbContext.Classrooms.find(query)
  }

  // async findById(id) {
  //   let classroom = await dbContext.Classrooms.findById(id);
  //   if (!classroom) {
  //     throw new BadRequest("Invalid Id");
  //   }
  //   return classroom
  // }

  async create(data) {
    return await dbContext.Classrooms.create(data)
  }

}

export const classroomsService = new ClassroomsService();