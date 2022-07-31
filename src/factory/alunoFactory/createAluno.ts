import CreateAlunoController from "../../controllers/alunoController/createAlunoController"
import Api from "../../repository/Api"

const createAluno = () =>{
    const api = new Api
    const createAlunoController = new CreateAlunoController(api)
    return createAlunoController
}

export default createAluno()