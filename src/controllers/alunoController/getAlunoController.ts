import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class GetAlunoController {
  constructor(private readonly getAlunoApi: Api) {}
  async getAluno(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const aluno = await this.getAlunoApi.getUserAluno(id);
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
