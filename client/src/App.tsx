import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer"; // Footer component import
import Header from "./components/Header/Header"; // Header component import
import { lazy } from "react";

const TasksPage = lazy(() => import("./pages/Tasks"));
const LoginPage = lazy(() => import("./pages/Login"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path='/register' element={ <Register/>} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
