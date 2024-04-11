import {
  createResult,
  getAllResult,
  getResult,
  getResultById,
  removeResult,
} from "../repositorys/results.repository"
import { resultsValidation } from "../validations/results.validation"

export const create = async (req, res) => {
  try {
    await resultsValidation.validate(req.body)
    const validate = await getResult(req.body)
    if (validate.length) {
      res.status(409).json("Já existe uma nota para essa matéria")
    }
    const result = await createResult(req.body)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const get = async (req, res) => {
  try {
    const result = await getAllResult()
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getId = async (req, res) => {
  try {
    const result = await getResultById(req.params.id)
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const remove = async (req, res) => {
  try {
    const response = getResultById(req.params.id)
    if (response) {
      removeResult(req.params.id)
    }

    res.status(200).send()
  } catch (error) {
    res.status(400).send(error)
  }
}
