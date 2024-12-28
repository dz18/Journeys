import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import '@fontsource/roboto/300.css';

// Contexts
import { 
  AuthProvider,
} from './contexts/AuthContext.jsx';

// Pages
import IndexPage from './pages/IndexPage.jsx'
import StaysPage from './pages/StaysPage.jsx';
import SearchFrame from './pages/SearchFrame.jsx';
import FlightsPage from './pages/FlightsPage.jsx';
import FlightHotelPage from './pages/FlightHotelPage.jsx';
import ManageAccountPage from './pages/ManageAccountPage.jsx';
import CartPage from './pages/CartPage.jsx';
import WalletPage from './pages/WalletPage.jsx';
import OrderHistoryPage from './pages/OrderHistoryPage.jsx';
import AccountFrame from './pages/AccountFrame.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage/>
  },
  {
    path: "search/",
    element: <SearchFrame/>,
    children: [
      {
        path: "stays",
        element: <StaysPage/>
      },
      {
        path: "flights",
        element: <FlightsPage/>
      },
      {
        path: "flight-hotel",
        element: <FlightHotelPage/>
      },
    ]
  },
  {
    path: "account/",
    element: <AccountFrame/>,
    children: [
      {
        path: 'manage',
        element: <ManageAccountPage/>
      },
      {
        path: 'cart',
        element: <CartPage/>
      },
      {
        path: 'wallet',
        element: <WalletPage/>
      },
      {
        path: 'order-history',
        element: <OrderHistoryPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
