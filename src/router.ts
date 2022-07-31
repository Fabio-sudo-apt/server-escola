import express from 'express';
import adm from './router/adm';
import bodyParser from 'body-parser'

const router = express.Router()

router.use(bodyParser.json())

router.use('/api', adm)

export default router