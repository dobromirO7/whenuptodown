import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { trpc } from '../lib/trpc'
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { createPrimerTrpcRoute } from './createPrimer'
import { getMeTrpcRoute } from './getMe'
import { getPrimerTrpcRoute } from './getPrimer'
import { getPrimeryTrpcRoute } from './getPrimery'
import { signInTrpcRoute } from './signIn'
import { signUpTrpcRoute } from './signUp'
import { updatePrimerTrpcRoute } from './updatePrimer'
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  createPrimer: createPrimerTrpcRoute,
  getMe: getMeTrpcRoute,
  getPrimer: getPrimerTrpcRoute,
  getPrimery: getPrimeryTrpcRoute,
  signIn: signInTrpcRoute,
  signUp: signUpTrpcRoute,
  updatePrimer: updatePrimerTrpcRoute,
  // @endindex
})

export type TrpcRouter = typeof trpcRouter
export type TrpcRouterInput = inferRouterInputs<TrpcRouter>
export type TrpcRouterOutput = inferRouterOutputs<TrpcRouter>
