import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { getAllPrimeryRoute, getViewPrimerRoute } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllPrimeryPage } from './pages/whenuptodown'
import { ViewPrimerPage } from './pages/whenuptodown/ViewPrimerPage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllPrimeryRoute()} element={<AllPrimeryPage />} />
            <Route path={getViewPrimerRoute({ primerNick: ':primerNick' })} element={<ViewPrimerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
