import { initTRPC } from '@trpc/server'
import _ from 'lodash'

const primery = _.times(100, (i) => ({
  nick: `cool-primer-nick-${i}`,
  name: `Primer ${i}`,
  description: `Description of primer ${i}...`,
  text: _.times(100, (j) => `<p>Text paragrph ${j} of primer ${i}...</p>`).join(''),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getPrimery: trpc.procedure.query(() => {
    return { primery: primery.map((primer) => _.pick(primer, ['nick', 'name', 'description'])) }
  }),
})

export type TrpcRouter = typeof trpcRouter
