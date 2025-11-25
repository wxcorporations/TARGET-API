import { Router } from 'express'

import { list } from '../controllers/commission-controller'

const route = Router()

route.get('/commissions', list)

// route.get('/commissions', filter)


export default route