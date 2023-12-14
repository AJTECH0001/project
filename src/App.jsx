
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Navbar from './Components/Navbar/Navbar'; 
import Footer from './Components/Footer/Footer'; 
// App.js

const Layout = () => {
  return (
    <div className='app'>
      {/* NAVIGATION BAR */}
      <Navbar />

      {/* Page */}
      <Outlet />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  },

  {
    path: '/products/:id',
    element: <Products />
  },

  {
    path: '/product/:id',
    element: <Product />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;