import { trpc } from '../../lib/trpc'
import { zCreatePrimerTrpcInput } from './input'

export const createPrimerTrpcRoute = trpc.procedure.input(zCreatePrimerTrpcInput).mutation(async ({ input, ctx }) => {
  if (!ctx.me) {
    throw Error('UNAUTHORIZED')
  }
  // if (primery.find((primer) => primer.nick === input.nick)) {
  //   throw Error('Primer with this nick already exists')
  // }
  const exPrimer = await ctx.prisma.primer.findUnique({
    where: {
      nick: input.nick,
    },
  })

  if (exPrimer) {
    throw Error('Primer with this nick already exists')
  }
  await ctx.prisma.primer.create({
    data: { ...input, authorId: ctx.me.id },
  })
  return true
})
