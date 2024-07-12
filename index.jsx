import React from 'react'
import { routes } from 'riser'
import { Home } from './home'

routes( [
  { path: "*", element: <Home /> },
] )
