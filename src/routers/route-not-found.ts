import express from 'express'

const route = express.Router()

route.use((req, res, next) => {
  res.status(404).json({ error: ['Descupa requisição não encontrada!']});
})

export default route