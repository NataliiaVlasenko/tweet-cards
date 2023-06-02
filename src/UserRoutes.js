import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

const Loader = lazy(() => import("../src/components/Loader"));
const CardsPage = lazy(() => import("../src/pages/CardsPage/CardsPage"));
const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/tweets" element={<CardsPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
