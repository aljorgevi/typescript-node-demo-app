import express from 'express'
import * as diaryServices from '../services/diary'

const diariesRouter = express.Router()

diariesRouter.get('/', (_, response) => {
  response.json(diaryServices.getEntriesWithourSensitiveInfo())
})

diariesRouter.get('/:id', (request, response) => {
  const diary = diaryServices.findById(Number(request.params.id))
  // if (diary == null) {
  //   response.status(404).send('Diary entry not found')
  // } else {
  //   response.json(diary)
  // }
  return (diary !== null)
    ? response.json(diary)
    : response.status(404).send('Diary entry not found')
})

diariesRouter.post('/', (_, response) => {
  response.send('Saving a diary')
})

export default diariesRouter
