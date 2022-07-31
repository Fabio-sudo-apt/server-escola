import DeleteProfessorController from "../../controllers/profConroller/deleteProfessorController";
import Api from "../../repository/Api";

const deleteProf = () => {
  const apiProf = new Api();
  const deleteProfessorContrller = new DeleteProfessorController(apiProf);
  return deleteProfessorContrller;
};

export default deleteProf();
