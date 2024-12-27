import express from 'express'

const primery = [
    { nick: 'primer1', name: 'primer 1', description: 'Описание примера 1' },
    { nick: 'primer2', name: 'primer 2', description: 'Описание примера 2' },
    { nick: 'primer3', name: 'primer 3', description: 'Описание примера 3' },
    { nick: 'primer4', name: 'primer 4', description: 'Описание примера 4' },
    { nick: 'primer5', name: 'primer 5', description: 'Описание примера 5' },
    { nick: 'primer6', name: 'primer 6', description: 'Описание примера 6' },
    { nick: 'primer7', name: 'primer 7', description: 'Описание примера 7' },
  ]
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'

const expressApp = express()
expressApp.get('/ping', (req, res) => {
  res.send('pong')    
})
expressApp.get('/primery', (req, res) => {
    res.send(primery)
  })
  expressApp.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: trpcRouter,
        })
    ),
                expressApp.listen(3000, () => {
    console.info ('Server is running on http://localhost:3000') 
})