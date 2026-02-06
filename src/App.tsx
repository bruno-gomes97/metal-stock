import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/authContext';
import { EmployeeProvider } from './context/employeeContext';
import { ProductProvider } from './context/productContext';
import DashboardLayout from './layouts/dashboardLayout';
import AddProductsPage from './pages/add-products';
import DashboardPage from './pages/dashboard';
import EmployeesPage from './pages/employees';
import LoginPage from './pages/login';
import ProductsPage from './pages/products';
import SearchProductPage from './pages/search-product';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <EmployeeProvider>
              <Routes>
                <Route path='/' element={<LoginPage />} />

                {/* Rota pai: DashboardLayout contém menu lateral e <Outlet /> */}
                <Route path='/dashboard' element={<DashboardLayout />}>
                  {/* Rota padrão: /dashboard */}
                  <Route index element={<DashboardPage />} />
                  {/* Rotas filhas: /dashboard/* */}
                  <Route path='products' element={<ProductsPage />} />
                  <Route path='add-product' element={<AddProductsPage />} />
                  <Route path='employees' element={<EmployeesPage />} />
                  <Route path='search-product' element={<SearchProductPage />} />
                </Route>
              </Routes>
            </EmployeeProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
