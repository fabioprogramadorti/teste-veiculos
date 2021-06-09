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

export const deleteVeiculo = async (req, res) => {
  const id = req.params.id
  try {
    const deletedVeiculo = await VeiculoModel.findOneAndDelete({ _id: id })
    res.json({
      status: STATUS.success,
      msg: `veiculo deleted`,
      dados: deletedVeiculo
    })
  } catch (err) {
    res.json({
      status: 'error',
      msg: err.message
    })
  }
}

export const getVeiculoById = async (req, res) => {
  const id = req.params.id
  try {
    const veiculo = await VeiculoModel.findById(id)
    res.json({
      status: STATUS.success,
      veiculo
    })
  } catch (err) {
    res.json({
      status: STATUS.error,
      msg: err.message
    })
  }
}