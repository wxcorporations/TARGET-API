import { Router } from 'express'

import { list } from '../controllers/sales-controller'

const route = Router()

route.get('/sales', list)


export default route