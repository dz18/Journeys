import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import IndexPage from './pages/IndexPage.jsx'
import StaysPage from './pages/StaysPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage/>
  },
  {
    path: "/stays",
    element: <StaysPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
