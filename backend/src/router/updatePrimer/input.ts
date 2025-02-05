import { z } from 'zod'
import { zCreatePrimerTrpcInput } from '../createPrimer/input'

export const zUpdatePrimerTrpcInput = zCreatePrimerTrpcInput.extend({
  primerId: z.string().min(1),
})
