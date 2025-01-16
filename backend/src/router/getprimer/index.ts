import { z } from 'zod'
import { primery } from '../../lib/primery'
import { trpc } from '../../lib/trpc'

export const getPrimerTrpcRoute = trpc.procedure
  .input(
    z.object({
      primerNick: z.string(),
    })
  )
  .query(({ input }) => {
    const primer = primery.find((primer) => primer.nick === input.primerNick)
    return { primer: primer || null }
  })
