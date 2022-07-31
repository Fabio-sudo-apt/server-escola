import CreateProfessorController from "../../controllers/profConroller/createProfessorController"
import Api from "../../repository/Api"

const createProf = () =>{
    const apiProf = new Api
    const createProfessorController = new CreateProfessorController(apiProf)
    return createProfessorController
}

export default createProf()