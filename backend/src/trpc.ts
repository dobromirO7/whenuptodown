import { initTRPC } from '@trpc/server'

const primery = [
  { nick: 'cool-primer-nick-1', name: 'primer 1', description: 'Description of primer 1...' },
  { nick: 'cool-primer-nick-2', name: 'primer 2', description: 'Description of primer 2...' },
  { nick: 'cool-primer-nick-3', name: 'primer 3', description: 'Description of primer 3...' },
  { nick: 'cool-primer-nick-4', name: 'primer 4', description: 'Description of primer 4...' },
  { nick: 'cool-primer-nick-5', name: 'primer 5', description: 'Description of primer 5...' }
]

const trpc = initTRPC.create()


export const trpcRouter = trpc.router({
  getPrimery: trpc.procedure.query(() => {
    return { primery }
  }),
})

export type trpcRouter = typeof trpcRouter
