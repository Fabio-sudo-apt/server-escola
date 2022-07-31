import DeleteAlunoController from "../../controllers/alunoController/deleteAlunoController";
import Api from "../../repository/Api";

const deleteAluno = () => {
  const apiProf = new Api();
  const deleteAlunoContrller = new DeleteAlunoController(apiProf);
  return deleteAlunoContrller;
};

export default deleteAluno();
