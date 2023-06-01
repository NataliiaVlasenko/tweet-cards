import { Route, Routes } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import("./Layout"));
const CardsPage = lazy(() => import("../pages/CardsPage/CardsPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<CardsPage />} /> 
        
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      </>
      
    
  );
}

export default App;