import { Router } from 'express'

import { list, filter, register, update } from '../controllers/commission-controller'

const route = Router()

route.get('/commissions', list)

route.get('/commissions', filter)

route.get('/commissions', register)

route.get('/commissions', update)

export default route