import { z } from 'zod'
import { primery } from '../../lib/primery'
import { trpc } from '../../lib/trpc'

export const createPrimerTrpcRoute = trpc.procedure
  .input(
    z.object({
      name: z.string().min(1),
      nick: z
        .string()
        .min(1)
        .regex(/^[a-z0-9-]+$/, 'Nick may contain only lowercase letters, numbers and dashes'),
      description: z.string().min(1),
      text: z.string().min(100, 'Text should be at least 100 characters long'),
    })
  )
  .mutation(({ input }) => {
    primery.unshift(input)
    return true
  })
