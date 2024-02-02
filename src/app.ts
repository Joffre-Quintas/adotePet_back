import express from 'express'
import cors from 'cors'
import routes from './routes'
import swaggerUI from 'swagger-ui-express'
import * as swaggerDocument from '../swagger.json'

const app = express()

app.use(express.json())
app.use(cors())
routes.map((route) => app.use(route))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

export default app
