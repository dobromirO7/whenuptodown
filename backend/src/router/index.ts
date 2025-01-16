import { trpc } from '../lib/trpc'
import { getPrimerTrpcRoute } from './getprimer'
import { getPrimeryTrpcRoute } from './getprimery'

export const trpcRouter = trpc.router({
  getPrimer: getPrimerTrpcRoute,
  getPrimery: getPrimeryTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter
