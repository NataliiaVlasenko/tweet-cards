import { Route, Routes } from "react-router";
import { lazy } from "react";

const Layout = lazy(() => import("./Layout"));
const Cards = lazy(() => import("../pages/CardsPage/Cards"));
const Home = lazy(() => import("../pages/HomePage/HomePage"));

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Cards />} /> 
        
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      </>
      
    
  );
}

export default App;