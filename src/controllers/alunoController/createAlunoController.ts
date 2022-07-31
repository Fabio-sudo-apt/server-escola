import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class CreateAlunoController {
  constructor(private readonly createAluno: Api) {}
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
       await this.createAluno.createAluno(data);
       res.status(200).json({message: "criado com sucesso"});
    } catch (error: any) {
      res.status(500).json({
        messages: error
      })
    }
  }
}