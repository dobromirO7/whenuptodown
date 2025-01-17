import { primery } from '../../lib/primery'
import { trpc } from '../../lib/trpc'
import { zCreatePrimerTrpcInput } from './input'

export const createPrimerTrpcRoute = trpc.procedure.input(zCreatePrimerTrpcInput).mutation(({ input }) => {
  if (primery.find((primer) => primer.nick === input.nick)) {
    throw Error('Primer with this nick already exists')
  }
  primery.unshift(input)
  return true
})
