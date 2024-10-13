import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Root from './Root/Root';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
    
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
