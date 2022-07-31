import express from "express";
import createAluno from "../factory/alunoFactory/createAluno";
import deleteAluno from "../factory/alunoFactory/deleteAluno";
import findAllAluno from "../factory/alunoFactory/findAllAluno";
import updateAluno from "../factory/alunoFactory/updateAluno";
import createProf from "../factory/professorFactory/createProf";
import deleteProf from "../factory/professorFactory/deleteProf";
import getProfs from "../factory/professorFactory/getProfs";
import updateProf from "../factory/professorFactory/updateProf";

const adm = express.Router();

adm.get("/admProfAll", (req, res) => getProfs.findAll(req, res));

adm.post("/createProf", (req, res) => createProf.create(req, res));

adm.put("/updateProf", (req, res) => updateProf.update(req, res));

adm.delete("/deleteProf/:id", (req, res) => deleteProf.delete(req, res));

adm.get("/admAlunoAll", (req, res)=> findAllAluno.findAll(req, res))

adm.post('/createAluno', (req, res)=> createAluno.create(req, res))

adm.put('/updateAluno', (req, res) => updateAluno.update(req, res))

adm.delete("/deleteAluno/:id", (req, res) => deleteAluno.delete(req, res));

export default adm;
