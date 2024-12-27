import type { TrpcRouter } from "@whenuptodown/backend/src/trpc"
import { createTRPCReact } from "@trpc/react-query"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const trpc = createTRPCReact<TrpcRouter>()
const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       retry: false,
       refetchOnWindowFocus: false,
     },
   }, 
})