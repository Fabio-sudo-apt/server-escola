import GetAlunoController from "../../controllers/alunoController/getAlunoController"
import Api from "../../repository/Api"

const getAluno = () =>{
    const api = new Api
    const getAlunoController = new GetAlunoController(api)
    return getAlunoController
}

export default getAluno()