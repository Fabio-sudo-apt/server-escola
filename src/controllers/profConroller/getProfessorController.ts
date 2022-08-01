import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class GetProfessoreController {
  constructor(private readonly getProf: Api) {}
  async getProfessor(req: Request, res: Response) {
    try {
      const id = req.params.id;
     const pessoa =  await this.getProf.getUserProf(id);
      res.status(200).json(pessoa);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
