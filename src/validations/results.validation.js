import * as yup from "yup"

export const resultsValidation = yup.object({
  bimestre: yup.string().required(),
  disciplina: yup.string().required(),
  nota: yup.number().moreThan(-1).lessThan(11).required(),
})
