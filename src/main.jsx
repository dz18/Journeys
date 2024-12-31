import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import '@fontsource/roboto/300.css';

// Contexts
import { AuthProvider } from './contexts/AuthContext.jsx';

// Pages
import IndexPage from './pages/Authentication/IndexPage.jsx';
import StaysPage from './pages/Search/StaysPage.jsx';
import SearchFrame from './pages/Search/SearchFrame.jsx';
import FlightsPage from './pages/Search/FlightsPage.jsx';
import FlightHotelPage from './pages/Search/FlightHotelPage.jsx';
import ManageAccountPage from './pages/Account/ManageAccountPage.jsx';
import CartPage from './pages/Account/CartPage.jsx';
import WalletPage from './pages/Account/WalletPage.jsx';
import OrderHistoryPage from './pages/Account/OrderHistoryPage.jsx';
import AccountFrame from './pages/Account/AccountFrame.jsx';


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
        path: "stays/",
        element: <StaysPage/>,
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
