import express from "express";
import BaseController from "../utils/BaseController";
import { studentclassroomService } from "../services/StudentClassroomService";

export class StudentClassroomController extends BaseController { // StudentClassroom Links Students to Classrooms (Many-to-Many)
  constructor() {
    super("api/studentclassrooms");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      res.send({message: "Data Retrieved", data: await studentclassroomService.find(req.query)});
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      res.send({message: "Data Created", data: await studentclassroomService.create(req.body)});
    } catch (error) {
      next(error);
    }
  }
}
