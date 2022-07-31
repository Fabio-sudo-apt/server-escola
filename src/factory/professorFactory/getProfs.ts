import GetProfessoresController from "../../controllers/profConroller/getProfessoresController"
import Api from "../../repository/Api"

const getProf = () => {
    const apiProf = new Api
    const getProfessoresController = new GetProfessoresController(apiProf)
    return getProfessoresController
}

export default getProf()