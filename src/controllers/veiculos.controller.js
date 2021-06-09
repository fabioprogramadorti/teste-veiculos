import VeiculoModel from '../db/models/veiculos.model'
const STATUS = {
  success: 'success',
  error: 'error'
}

export const createVeiculo = async (req, res) => {
  try {
    const newVeiculo = await VeiculoModel.create(req.body)
    res.json({
      status: STATUS.success,
      newVeiculo
    })
  } catch (err) {
    res.json({
      status: STATUS.error,
      msg: err.message
    })
  }
}

export async function listVeiculos() {

}

export async function updateVeiculo(id) {

}

export async function deleteVeiculo(id) {

}

export async function getVeiculoById(id) {

}