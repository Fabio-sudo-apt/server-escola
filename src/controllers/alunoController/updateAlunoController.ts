import { Request, Response } from "express";
import Api from "../../repository/Api";

export default class UpdateAlunoController {
  constructor(private readonly updateA: Api) {}
  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      await this.updateA.updataAluno(data);
      res.status(200).json({ message: "update ok" });
    } catch (error: any) {
      res.status(500).json({
        error,
      });
    }
  }
}
