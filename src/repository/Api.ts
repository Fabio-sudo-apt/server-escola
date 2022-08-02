import { Repository, DadosProfessor, DadosAluno, DadosProfessorCreate } from "./repository";
import { professores, alunos } from "../database/model";
import * as Yup from "yup";

export default class Api implements Repository {
  async getUserProf(id: string): Promise<DadosProfessor> {
    const pessoas = await professores.get();
    let user = <DadosProfessor>{};
    if (!pessoas.empty) {
      const data = pessoas.docs;
      data.forEach((item) => {
        if (id === item.id) {
          console.log(item.data())
          let dadosPessoa = new DadosProfessor(
            {
              id: item.id,
              name: item.data().data.name,
              email: item.data().data.email,
              idade: item.data().data.idade,
              password: item.data().data.password,
              genero: item.data().data.genero,
              turma: item.data().data.turma,
              turno: item.data().data.turno,
            },
            item.data().rua,
            item.data().bairro,
            item.data().disciplina
          );
          user = dadosPessoa;
        }
      });
    }
    return user;
  }
  async createProf(data: DadosProfessorCreate): Promise<void> {
    const validadeData = Yup.object().shape({
      data: Yup.object().required("Data e obrigatorio"),
      rua: Yup.string().required("Rua e obrigatorio"),
      bairro: Yup.string().required("Bairro e obrigatorio"),
      disciplina: Yup.string().required("Disciplina e obrigatorio"),
    } as Record<keyof DadosProfessor, any>);

    await validadeData.validate(data);
    await professores.doc().set(data)
  }
  async getProfs(): Promise<DadosProfessor[]> {
    const pessoas = await professores.get();
    let ListPessaos = <DadosProfessor[]>[];
    if (!pessoas.empty) {
      const data = pessoas.docs;
      data.forEach((item) => {
        let dadosPessoa = new DadosProfessor(
          {
            id: item.id,
            name: item.data().data.name,
            email: item.data().data.email,
            idade: item.data().data.idade,
            password: item.data().data.password,
            genero: item.data().data.genero,
            turma: item.data().data.turma,
            turno: item.data().data.turno,
          },
          item.data().rua,
          item.data().bairro,
          item.data().disciplina
        );
        ListPessaos.push(dadosPessoa);
      });
    }
    return ListPessaos;
  }
  async updataProf(doc: DadosProfessor): Promise<void> {
    const validadeDoc = Yup.object().shape({
      data: Yup.object().required("Doc e obrigatorio"),
      rua: Yup.string().required("Rua e obrigatorio"),
      bairro: Yup.string().required("Bairro e obrigatorio"),
      disciplina: Yup.string().required("Disciplina e obrigatorio"),
    } as Record<keyof DadosProfessor, any>);
    await validadeDoc.validate(doc);

    await professores.firestore
      .collection("professores")
      .doc(doc.data.id)
      .update(doc);
  }
  async deleteProf(id: string): Promise<void> {
    await professores.firestore
    .collection("professores")
    .doc(id)
    .delete();
  }
  getUserAluno(id: string): Promise<DadosAluno> {
    throw new Error("Method not implemented.");
  }
  createAluno(data: DadosAluno): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAlunos(): Promise<DadosAluno[]> {
    throw new Error("Method not implemented.");
  }
  updataAluno(data: DadosAluno): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteAluno(id: string): void {
    throw new Error("Method not implemented.");
  }

}