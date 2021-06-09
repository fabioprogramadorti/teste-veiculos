import { Router } from 'express'
import {
  createVeiculo,
  listVeiculos,
  updateVeiculo,
  deleteVeiculo,
  getVeiculoById,
} from '../controllers/veiculo.controller'

const router = Router()

// veiculos endpoits 
router.post('/', createVeiculo)
router.get('/', listVeiculos)
router.get('/:id', getVeiculoById)
router.put('/:id', updateVeiculo)
router.delete('/:id', deleteVeiculo)

export default router