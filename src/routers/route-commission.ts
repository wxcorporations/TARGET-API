import { Router } from 'express'

import { list } from '../controllers/commission-controller'

const route = Router()

route.get('/commissions', list)

export default route