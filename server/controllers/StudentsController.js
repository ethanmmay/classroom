import express from "express";
import BaseController from "../utils/BaseController";
import { studentsService } from "../services/StudentsService";
import { studentclassroomService } from "../services/StudentClassroomService";

export class StudentsController extends BaseController { // Students Links Students to Classrooms (Many-to-Many)
  constructor() {
    super("api/students");
    this.router
      .get("", this.getAll)
      .get("/:id/classrooms", this.getClassroomsbyStudentId)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      res.send({message: "Data Retrieved", data: await studentsService.find(req.query)});
    } catch (error) {
      next(error);
    }
  }

  async getClassroomsbyStudentId(req, res, next) {
    try {
        res.send({message: "Classes Retrieved", data: await studentclassroomService.findOnlyClasses({ student: req.params.id })});
      } catch (error) {
        next(error);
      }
  }

  async create(req, res, next) {
    try {
      res.send({message: "Data Created", data: await studentsService.create(req.body)});
    } catch (error) {
      next(error);
    }
  }
}
