import { trpc } from '../lib/trpc'
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { createPrimerTrpcRoute } from './createPrimer'
import { getPrimerTrpcRoute } from './getPrimer'
import { getPrimeryTrpcRoute } from './getPrimery'
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  createPrimer: createPrimerTrpcRoute,
  getPrimer: getPrimerTrpcRoute,
  getPrimery: getPrimeryTrpcRoute,
  // @endindex
})

export type TrpcRouter = typeof trpcRouter
