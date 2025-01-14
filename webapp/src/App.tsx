import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import * as routes from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllPrimeryPage } from './pages/whenuptodown'
import { NewPrimerPage } from './pages/whenuptodown/NewPrimerPage'
import { ViewPrimerPage } from './pages/whenuptodown/ViewPrimerPage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.getAllPrimeryRoute()} element={<AllPrimeryPage />} />
            <Route path={routes.getNewPrimerRoute()} element={<NewPrimerPage />} />
            <Route path={routes.getViewPrimerRoute(routes.viewPrimerRouteParams)} element={<ViewPrimerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
