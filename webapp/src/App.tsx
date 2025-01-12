import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllPrimeryRoute, getViewPrimerRoute } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllPrimeryPage } from './pages/whenuptodown'
import { ViewPrimerPage } from './pages/whenuptodown/ViewPrimerPage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllPrimeryRoute()} element={<AllPrimeryPage />} />
          <Route path={getViewPrimerRoute({ primerNick: ':primerNick' })} element={<ViewPrimerPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
