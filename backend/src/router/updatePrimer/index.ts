import { trpc } from '../../lib/trpc'
import { zUpdatePrimerTrpcInput } from './input'

export const updatePrimerTrpcRoute = trpc.procedure.input(zUpdatePrimerTrpcInput).mutation(async ({ ctx, input }) => {
  const { primerId, ...primerInput } = input
  if (!ctx.me) {
    throw new Error('UNAUTHORIZED')
  }
  const primer = await ctx.prisma.primer.findUnique({
    where: {
      id: primerId,
    },
  })
  if (!primer) {
    throw new Error('NOT_FOUND')
  }
  if (ctx.me.id !== primer.authorId) {
    throw new Error('NOT_PRIMER_PRIMER')
  }
  if (primer.nick !== input.nick) {
    const exPrimer = await ctx.prisma.primer.findUnique({
      where: {
        nick: input.nick,
      },
    })
    if (exPrimer) {
      throw new Error('Primer with this nick already exists')
    }
  }
  await ctx.prisma.primer.update({
    where: {
      id: primerId,
    },
    data: {
      ...primerInput,
    },
  })
  return true
})
