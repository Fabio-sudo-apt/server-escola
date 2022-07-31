import database from './firebase'

export const professores = database.collection('professores')

export const alunos = database.collection('alunos')