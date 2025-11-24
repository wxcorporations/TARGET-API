import cors from 'cors'
import express from 'express';
import { PORT_EXPRESS } from './config/constants';
import swagger from './config/swagger';

import { routeCommission, routeSales, routeStock } from './routers'

const app = express();

app.use(cors())
app.use(express.json())
app.use(swagger.route, swagger.serve, swagger.setup)


app.use(routeCommission)
app.use(routeSales)
app.use(routeStock)

app.listen(PORT_EXPRESS, () => {
  console.log('Servidor online: ', PORT_EXPRESS);
});