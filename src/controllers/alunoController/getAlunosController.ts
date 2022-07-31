import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class GetAlunosController {
  constructor(private readonly createAluno: Api) {}
  async findAll(req: Request, res: Response) {
    try {
      const aluno = await this.createAluno.getAlunos();
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json(error)
    }
  }
}