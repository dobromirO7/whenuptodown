import { primery } from '../../lib/primery'
import { trpc } from '../../lib/trpc'
import { zCreatePrimerTrpcInput } from './input'

export const createPrimerTrpcRoute = trpc.procedure.input(zCreatePrimerTrpcInput).mutation(({ input }) => {
  primery.unshift(input)
  return true
})
