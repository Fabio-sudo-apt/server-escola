import GetProfessoresController from "../../controllers/profConroller/getProfessoresController"
import Api from "../../repository/Api"

const getProfs = () => {
    const apiProf = new Api
    const getProfessoresController = new GetProfessoresController(apiProf)
    return getProfessoresController
}

export default getProfs()