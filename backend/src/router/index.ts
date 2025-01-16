import { trpc } from '../lib/trpc'
// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { getPrimerTrpcRoute } from './getprimer'
import { getPrimeryTrpcRoute } from './getprimery'
// @endindex

export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  getPrimer: getPrimerTrpcRoute,
  getPrimery: getPrimeryTrpcRoute,
  // @endindex
})

export type TrpcRouter = typeof trpcRouter
