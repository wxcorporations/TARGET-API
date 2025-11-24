import { Router } from 'express'

import { list, filter, register, update } from '../controllers/stock-controller'

const route = Router()

route.get('/stock', list)

route.get('/stock', filter)

route.get('/stock', register)

route.get('/stock', update)

export default route
