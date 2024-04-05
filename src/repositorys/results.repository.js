import { prisma } from "../services/prisma"

export const createResult = async (data) => {
  const result = await prisma.resultado.create({
    data,
  })
  return result
}

export const getAllResult = async () => {
  const results = await prisma.resultado.findMany({})
  return results
}

export const getResultById = async (id) => {
  const results = await prisma.resultado.findUnique({
    where: {
      id,
    },
  })
  return results
}

export const removeResult = async (id) => {
  await prisma.resultado.delete({
    where: {
      id,
    },
  })
  return
}
