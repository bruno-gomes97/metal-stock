import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { ProductProvider } from './context/productContext';
import DashboardLayout from './layouts/dashboardLayout';
import AddProductsPage from './pages/add-products';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import ProductsPage from './pages/products';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<LoginPage />} />

            {/* Rota pai: DashboardLayout contém menu lateral e <Outlet /> */}
            <Route path='/dashboard' element={<DashboardLayout />}>
              {/* Rota padrão: /dashboard */}
              <Route index element={<DashboardPage />} />
              {/* Rotas filhas: /dashboard/* */}
              <Route path='products' element={<ProductsPage />} />
              <Route path='add-product' element={<AddProductsPage />} />
            </Route>
          </Routes>
         </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
