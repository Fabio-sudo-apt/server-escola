import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class CreateProfessorController {
  constructor(private readonly createPof: Api) {}
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const prof = await this.createPof.createProf(data);
      res.status(201).json(prof);
    } catch (error: any) {
      res.status(500).json({
        messages: error
      })
    }
  }
}