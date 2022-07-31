import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class DeleteProfessorController {
  constructor(private readonly deleteProf: Api) {}
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const prof = await this.deleteProf.deleteProf(id);
      res.status(201).json({
        message: 'deletato com sucesso'
      });
    } catch (error: any) {
      res.status(500).json({
        messages: error
      })
    }
  }
}