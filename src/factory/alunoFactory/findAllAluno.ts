import GetAlunosController from "../../controllers/alunoController/getAlunosController"
import Api from "../../repository/Api"

const findAllAluno = () =>{
    const api = new Api
    const findAllAlunoController = new GetAlunosController(api)
    return findAllAlunoController
}

export default findAllAluno()