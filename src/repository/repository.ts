type genero = "Masculino" | "Feminino" | "Outros";

interface IPessoa {
  id: string;
  name: string;
  email: string;
  password: string;
  idade: number;
  genero: genero;
  turma: string;
  turno: string;
}

class endereco {
  constructor(public readonly rua: string, public readonly bairro: string) {
    this.rua = rua;
    this.bairro = bairro;
  }
}

export class DadosPessoa extends endereco {
  constructor(
    public readonly data: IPessoa,
    rua: string,
    bairro: string
  ) {
    super(rua, bairro);
    this.data.id = data.id;
    this.data.email = data.email;
    this.data.name = data.name;
    this.data.password = data.password;
    this.data.idade = data.idade;
    this.data.genero = data.genero;
    this.data.turma = data.turma;
    this.data.turno = data.turno;
    
  }
}

export class DadosProfessor extends DadosPessoa {
  constructor(
    data: IPessoa,
    public readonly rua: string,
    public readonly bairro: string,
    public readonly disciplina: string
  ) {
    super(data, rua, bairro);
    this.disciplina = disciplina;
  }
}

export class DadosAluno extends DadosPessoa {
  constructor(
    data: IPessoa,
    public readonly rua: string,
    public readonly bairro: string,
    public readonly n1: number,
    public readonly n2: number,
  ) {
    super(data, rua, bairro);
    this.n1 = n1;
    this.n2 = n2;
  }
}

export interface Repository {
  createProf(data: DadosProfessor): Promise<void>;
  getProfs(): Promise<DadosProfessor[]>;
  updataProf(data: DadosProfessor): Promise<void>;
  deleteProf(id: string): void;
  
  getUserProf(id: string): Promise<DadosProfessor>
  getUserAluno(id: string): Promise<DadosAluno>

  createAluno(data: DadosAluno): Promise<void>;
  getAlunos(): Promise<DadosAluno[]>;
  updataAluno(data: DadosAluno): Promise<void>;
  deleteAluno(id: string): void;
}
