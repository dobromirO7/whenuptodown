import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import * as routes from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllPrimeryPage } from './pages/whenuptodown'
import { EditPrimerPage } from './pages/whenuptodown/EditPrimerPage'
import { NewPrimerPage } from './pages/whenuptodown/NewPrimerPage'
import { SignInPage } from './pages/whenuptodown/SignInPage'
import { SignOutPage } from './pages/whenuptodown/SignOutPage'
import { SignUpPage } from './pages/whenuptodown/SignUpPage'
import { ViewPrimerPage } from './pages/whenuptodown/ViewPrimerPage'
import './styles/global.scss'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.getSignOutRoute()} element={<SignOutPage />} />
          <Route element={<Layout />}>
            <Route path={routes.getSignUpRoute()} element={<SignUpPage />} />
            <Route path={routes.getAllPrimeryRoute()} element={<AllPrimeryPage />} />
            <Route path={routes.getNewPrimerRoute()} element={<NewPrimerPage />} />
            <Route path={routes.getViewPrimerRoute(routes.viewPrimerRouteParams)} element={<ViewPrimerPage />} />
            <Route path={routes.getSignInRoute()} element={<SignInPage />} />
            <Route path={routes.getEditPrimerRoute(routes.editPrimerRouteParams)} element={<EditPrimerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
