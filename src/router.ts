import express from 'express';
import adm from './router/adm';
import bodyParser from 'body-parser'
import cors from 'cors';

const router = express.Router()

router.use(bodyParser.json())
router.use(cors())

router.use('/api', adm)
export default router