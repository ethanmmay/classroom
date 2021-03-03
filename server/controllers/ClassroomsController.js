import express from "express";
import BaseController from "../utils/BaseController";
import { classroomsService } from "../services/ClassroomsService";
import { assignmentsService } from "../services/AssignmentsService";
import { studentsService } from "../services/StudentsService";
import { studentclassroomService } from "../services/StudentClassroomService";

export class ClassroomsController extends BaseController { // Classroom has no dependency
  constructor() {
    super("api/classrooms");
    this.router
      .get("", this.getAll)
      .get("/:id/assignments", this.getAssignmentsByClassroomId)
      .get("/:id/students", this.getStudentsByClassroomId)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      res.send({message: "Data Retrieved", data: await classroomsService.find(req.query)});
    } catch (error) {
      next(error);
    }
  }

  async getAssignmentsByClassroomId(req, res, next) {
    try {
      res.send({message: "Assignments Retrieved", data: await assignmentsService.find({ classroom: req.params.id})});
    } catch (error) {
      next(error);
    }
  }

  async getStudentsByClassroomId(req, res, next) {
    try {
      res.send({message: "Students Retrieved", data: await studentclassroomService.find({ classroom: req.params.id })});
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      res.send({message: "Data Created", data: await classroomsService.create(req.body)});
    } catch (error) {
      next(error);
    }
  }
}
