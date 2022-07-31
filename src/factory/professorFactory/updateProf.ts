import UpdateProfessorController from "../../controllers/profConroller/updateProfessorController"
import Api from "../../repository/Api"

const updateProf = () =>{
    const apiProf = new Api
    const updateProfessorController = new UpdateProfessorController(apiProf)
    return updateProfessorController
}

export default updateProf()