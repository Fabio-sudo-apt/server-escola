import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class UpdateProfessorController {
  constructor(private readonly createPof: Api) {}
  async update(req: Request, res: Response) {
    try {
    const data = req.body;
    await this.createPof.updataProf(data)
      res.status(201).json({message: 'update ok'});
    } catch (error: any) {
      res.status(500).json({
        error,
      });
    }
  }
}
