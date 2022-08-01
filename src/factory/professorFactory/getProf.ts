import GetProfessoreController from "../../controllers/profConroller/getProfessorController"
import Api from "../../repository/Api"

const getProf = () => {
    const apiProf = new Api
    const getProfessoreController = new GetProfessoreController(apiProf)
    return getProfessoreController
}

export default getProf()