import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer'; // Footer component import
import Header from './components/Header/Header'; // Header component import
import { lazy } from 'react';

const TasksPage = lazy(() => import('./pages/Tasks'));
const LoginPage = lazy(() => import('./pages/Login'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const ComponentTest= lazy(()=>import("./components/ui/Button/Button"));

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<TasksPage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        {/* <Route path='/register' element={ <Register/>} /> */}
        <Route
          path='*'
          element={<NotFoundPage />}
        />
        <Route path='test' element={<ComponentTest id='A' size='md' title='a' type='button' disabled={false} name='hola' variant='Cancel' text="Agregar"/>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
