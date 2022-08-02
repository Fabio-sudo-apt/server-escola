import { Repository, DadosProfessor, DadosAluno } from "./repository";
import { professores, alunos } from "../database/model";
import * as Yup from "yup";

export default class Api implements Repository {
  async getUserAluno(id: string): Promise<DadosAluno> {
    const validadeId = Yup.object().shape({
      id: Yup.string().required("id e obrigatorio"),
    });
    await validadeId.validate(id);
    const pessoas = await alunos.get();
    let user = <DadosAluno>{};
    if (!pessoas.empty) {
      const data = pessoas.docs;
      data.forEach((item) => {
        if (id === item.id) {
          let dadosPessoa = new DadosAluno(
            {
              id: item.id,
              name: item.data().name,
              email: item.data().email,
              idade: item.data().idade,
              password: item.data().password,
              genero: item.data().genero,
              turma: item.data().turma,
              turno: item.data().turno,
            },
            item.data().rua,
            item.data().bairro,
            item.data().n1,
            item.data().n1
          );
          user = dadosPessoa;
        }
      });
    }
    return user;
  }
  async getUserProf(id: string): Promise<DadosProfessor> {
    const pessoas = await professores.get();
    let user = <DadosProfessor>{};
    if (!pessoas.empty) {
      const data = pessoas.docs;
      data.forEach((item) => {
        if (id === item.id) {
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
  async createAluno(data: DadosAluno): Promise<void> {
    const validadeData = Yup.object().shape({
      data: Yup.object().required("Data e obrigatorio"),
      rua: Yup.string().required("Rua e obrigatorio"),
      bairro: Yup.string().required("Bairro e obrigatorio"),
      n1: Yup.string().required("Nota1 e obrigatorio"),
      n2: Yup.string().required("Nota1 e obrigatorio"),
    } as Record<keyof DadosAluno, any>);

    await validadeData.validate(data);
    await alunos.doc().set(data);
  }
  async getAlunos(): Promise<DadosAluno[]> {
    const pessoas = await alunos.get();
    let ListPessaos = <DadosAluno[]>[];
    if (!pessoas.empty) {
      const data = pessoas.docs;
      data.forEach((item) => {
        let dadosPessoa = new DadosAluno(
          {
            id: item.id,
            name: item.data().name,
            email: item.data().email,
            idade: item.data().idade,
            password: item.data().password,
            genero: item.data().genero,
            turma: item.data().turma,
            turno: item.data().turno,
          },
          item.data().rua,
          item.data().bairro,
          item.data().n1,
          item.data().n2
        );
        ListPessaos.push(dadosPessoa);
      });
    }
    return ListPessaos;
  }
  async updataAluno(doc: DadosAluno): Promise<void> {
    const validadeDoc = Yup.object().shape({
      data: Yup.object().required("Data e obrigatorio"),
      rua: Yup.string().required("Rua e obrigatorio"),
      bairro: Yup.string().required("Bairro e obrigatorio"),
      n1: Yup.string().required("Nota1 e obrigatorio"),
      n2: Yup.string().required("Nota1 e obrigatorio"),
    });
    await validadeDoc.validate(doc);
    await alunos.doc(doc.data.id).delete();
    await alunos.firestore.collection("alunos").doc(doc.data.id).set(doc);
  }
  async deleteAluno(id: string): Promise<void> {
    const validadeId = Yup.object().shape({
      id: Yup.string().required("id e obrigatorio"),
    });
    await validadeId.validate(id);
    await alunos.doc(id).delete();
  }
  async createProf(doc: DadosProfessor): Promise<void> {
    const validadeData = Yup.object().shape({
      data: Yup.object().required("Data e obrigatorio"),
      rua: Yup.string().required("Rua e obrigatorio"),
      bairro: Yup.string().required("Bairro e obrigatorio"),
      disciplina: Yup.string().required("Disciplina e obrigatorio"),
    } as Record<keyof DadosProfessor, any>);

    await validadeData.validate(doc);
    const user = new DadosProfessor(
      {
        id: doc.data.id,
        name: doc.data.name,
        email: doc.data.email,
        idade: doc.data.idade,
        genero: doc.data.genero,
        password: doc.data.genero,
        turma: doc.data.turma,
        turno: doc.data.turno,
      },
      doc.rua,
      doc.bairro,
      doc.disciplina
    );
    await professores.doc().set(user);
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
  async updataProf(item: DadosProfessor): Promise<void> {
    const validadeDoc = Yup.object().shape({
      data: Yup.object().required("Doc e obrigatorio"),
      rua: Yup.string().required("Rua e obrigatorio"),
      bairro: Yup.string().required("Bairro e obrigatorio"),
      disciplina: Yup.string().required("Disciplina e obrigatorio"),
    } as Record<keyof DadosProfessor, any>);
    await validadeDoc.validate(item);
    await professores.doc(item.data.id).delete();
    await professores.firestore
      .collection("professores")
      .doc(item.data.id)
      .set(item);
  }
  async deleteProf(id: string): Promise<void> {
    await professores.doc(id).delete();
  }
}
