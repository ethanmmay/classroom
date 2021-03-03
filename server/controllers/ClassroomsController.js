import express from "express";
import BaseController from "../utils/BaseController";
import { classroomsService } from "../services/ClassroomsService";

export class ClassroomsController extends BaseController { // Classroom has no dependency
  constructor() {
    super("api/classrooms");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      res.send({message: "Data Retrieved", data: await classroomsService.find(req.query)});
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
