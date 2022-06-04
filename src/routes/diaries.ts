import express from 'express'

const diariesRouter = express.Router()

diariesRouter.get('/', (_, response) => {
  response.send('Fetching all diaries')
})

diariesRouter.post('/', (_, response) => {
  response.send('Saving a diary')
})

export default diariesRouter
