import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import router from './router.jsx'
import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <RouterProvider router={router} />
    </PrismicProvider>
  </React.StrictMode>
)
