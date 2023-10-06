import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Book from './pages/Book';
import ContactUs from './pages/ContactUs';
import Layout from './Components/Layout'
import LoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter(
    [
      {

        path: '/',
        element: <Layout />,
        children:
          [{
            path: '/',
            element: <HomePage />

          },
          {
            path: 'login',
            element: <LoginPage />

          },
          {
            path: 'aboutus',
            element: <AboutUs />


          },
          {
            path: 'services',
            element: <Services />

          },
          {
            path: 'book',
            element: <Book />

          },
          {
            path: 'contact',
            element: <ContactUs />

          },
          {
            path: 'register',
            element: <RegisterPage />

          },


          ],
      },
      {

        path: 'admin/dashboard',
        element: <AdminDashboard />,


      },

    ]);
  return (


    <RouterProvider router={router} />


  );
}

export default App;
