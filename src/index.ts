import express from 'express'
import diariesRouter from './routes/diaries'

const app = express()

app.use(express.json())
app.use('/api/v1/diaries', diariesRouter)

const PORT = 3000

app.get('/ping', (_, response) => {
  console.log('someone pinged here!!!')
  response.send('Pong!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
