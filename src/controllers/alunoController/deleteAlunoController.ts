import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class DeleteAlunoController {
  constructor(private readonly deleteAluno: Api) {}
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await this.deleteAluno.deleteAluno(id);
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