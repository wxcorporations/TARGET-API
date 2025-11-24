import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import { PORT_EXPRESS } from "./constants";

// Defina a especificação do Swagger
const options = { 
    swaggerDefinition: {
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
    apis: ['./routes/*.js'] 
};

const swaggerSpec = swaggerJSDoc(options);


export const config = ['/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)]

