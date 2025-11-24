import { Router } from 'express'

import { list, filter, register, update } from '../controllers/sales-controller'

const route = Router()

route.get('/sales', list)

route.get('/sales', filter)

route.post('/sale', register)

route.put('/sale', update)

export default route