import { z } from 'zod'
import { trpc } from '../../lib/trpc'

export const getPrimerTrpcRoute = trpc.procedure
  .input(
    z.object({
      primerNick: z.string(),
    })
  )

  .query(async ({ ctx, input }) => {
    const primer = await ctx.prisma.primer.findUnique({
      where: {
        nick: input.primerNick,
      },
      include: {
        author: {
          select: {
            id: true,
            nick: true,
          },
        },
      },
    })

    return { primer }
  })
// мы запросили методом асинк контекст из инпут и сравнили ник инпута и ник призмы
