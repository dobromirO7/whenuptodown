import { TrpcProvider } from './lib/trpc'
import { AllPrimeryPage } from './pages/whenuptodown'

export const App = () => {
  return (
    <TrpcProvider>
      <AllPrimeryPage />
    </TrpcProvider>
  )
}

