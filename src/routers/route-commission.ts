import { Router } from 'express'

const route = Router()

/**
 * @swagger
 * /commissions:
 *   get:
 *     summary: Busca comissão de todos os vendedores
 *     tags:
 *       - commissions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
route.get('/commissions', (request, response) => {
// listar todas as comissoes
    
    response.status(200).json({ status: 'success', data: ['commissions'] })

})
// - definir total de itens
// - no intervalo de tempo

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Maria"
 *     responses:
 *       201:
 *         description: Usuário criado
 */
route.get('/commission', (request, response) => {
// listar comissao de um vendedor
// - filtar por id
// - definir total de itens
// - filtrar por um intervalo de tempo

    response.status(200).json({ status: 'success', data: ['commission'] })
})

export default route