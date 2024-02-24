import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
   </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
  </React.StrictMode>,
)
