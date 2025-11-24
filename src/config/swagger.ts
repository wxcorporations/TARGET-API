import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import { PORT_EXPRESS } from "./constants";

// Defina a especificação do Swagger
const options = { 
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Target',
            version: '1.0.0',
            description: 'Documentação de todos os endpoints da API'
        },
        servers: [
            {
            url: `http://localhost:${PORT_EXPRESS}`,
            description: ''
            }
        ]
    },
    apis: ['../routers/*.ts'] 
};

const swaggerSpec = swaggerJSDoc(options);


export default {
    route: '/api-docs',
    serve: swaggerUi.serve,
    setup: swaggerUi.setup(swaggerSpec)
}
