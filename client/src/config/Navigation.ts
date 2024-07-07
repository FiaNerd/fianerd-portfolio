/* eslint-disable @typescript-eslint/no-explicit-any */
import HomePage from '../pages/HomePage'

export interface Route {
  path: string
  name: string
  nav?: React.ComponentType
}

export const NavigationRoutes: Route[] = [
  {
    path: '/',
    name: 'Hem',
    nav: HomePage,
  },
  {
    path: '/',
    name: 'Om mig',
  },
  {
    path: '/',
    name: 'My projects',
  },
  {
    path: '/',
    name: 'Kontakt',
  },
]
