const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}
export const getAllPrimeryRoute = () => '/'

export const viewPrimerRouteParams = getRouteParams({ primerNick: true })
export type ViewPrimerRouteParams = typeof viewPrimerRouteParams
export const getViewPrimerRoute = ({ primerNick }: ViewPrimerRouteParams) => `/primery/${primerNick}`
export const getNewPrimerRoute = () => '/primery/new'
export const getSignUpRoute = () => '/sign-up'
export const getSignInRoute = () => '/sign-in'
export const getSignOutRoute = () => '/sign-out'
