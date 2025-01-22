import { trpc } from '../../lib/trpc'

export const getPrimeryTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const primery = await ctx.prisma.primer.findMany({
    select: {
      id: true,
      nick: true,
      name: true,
      description: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return { primery }
})
