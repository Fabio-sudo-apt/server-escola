import { Repository, DadosProfessor, DadosAluno } from "./repository";
import { professores, alunos } from "../database/model";
import * as Yup from "yup";

export default class Api implements Repository {
  async getUserAluno(id: string): Promise<DadosAluno> {
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
            item.data().disciplina
          );
          user = dadosPessoa;
        }
      });
    }
    return user;
  }
  async createAluno(data: DadosAluno): Promise<void> {
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
    await alunos.firestore.collection("alunos").doc(doc.data.id).set(doc);
  }
  async deleteAluno(id: string): Promise<void> {
    const pessoa = alunos.doc(id).delete();
  }
  async createProf(data: DadosProfessor): Promise<void> {
    await professores.doc().set(data);
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
          item.data().disciplina
        );
        ListPessaos.push(dadosPessoa);
      });
    }
    return ListPessaos;
  }
  async updataProf(item: DadosProfessor): Promise<void> {
    let dadosPessoa = new DadosProfessor(
      {
        id: item.data.id,
        name: item.data.name,
        email: item.data.email,
        idade: item.data.idade,
        password: item.data.password,
        genero: item.data.genero,
        turma: item.data.turma,
        turno: item.data.turno,
      },
      item.rua,
      item.bairro,
      item.disciplina
    );
    await professores.firestore
      .collection("professores")
      .doc(item.data.id)
      .update(dadosPessoa);
  }
  async deleteProf(id: string): Promise<void> {
    await professores.doc(id).delete();
  }
}
