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

export const listVeiculos = async (req, res) => {
  try {
    const allVeiculos = await VeiculoModel.find({})

    res.json({
      status: STATUS.success,
      qtd: allVeiculos.length,
      veiculos: allVeiculos
    })
  } catch (err) {
    res.json({
      status: STATUS.error,
      msg: err.message
    })
  }
}

export const updateVeiculo = async (req, res) => {
  const id = req.params.id
  let data = req.body

  try {
    const updatedVeiculo = await VeiculoModel
      .findOneAndUpdate(
        { _id: id },
        { ...data },
        { new: true } // returns the modified object
      )
    res.json({
      status: STATUS.success,
      updatedVeiculo
    })
  } catch (err) {
    res.json({
      status: STATUS.error,
      msg: err.message
    })
  }
}

export async function deleteVeiculo(id) {

}

export async function getVeiculoById(id) {

}