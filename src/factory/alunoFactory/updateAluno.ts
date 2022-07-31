import UpdateAlunoController from "../../controllers/alunoController/updateAlunoController"

import Api from "../../repository/Api"

const updateAluno = () =>{
    const apiProf = new Api
    const updateAlunoController = new UpdateAlunoController(apiProf)
    return updateAlunoController
}

export default updateAluno()