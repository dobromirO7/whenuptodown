import _ from 'lodash'
import { primery } from '../../lib/primery'
import { trpc } from '../../lib/trpc'

export const getPrimeryTrpcRoute = trpc.procedure.query(() => {
  return { primery: primery.map((primer) => _.pick(primer, ['nick', 'name', 'description'])) }
})
