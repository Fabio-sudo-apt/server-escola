import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class GetProfessoresController {
  constructor(private readonly createPof: Api) {}
  async findAll(req: Request, res: Response) {
    try {
      const prof = await this.createPof.getProfs();
      res.status(200).json(prof);
    } catch (error) {
      res.status(500).json(error)
    }
  }
}