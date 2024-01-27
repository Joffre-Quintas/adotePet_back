import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(cors())
routes.map((route) => app.use(route))

export default app
