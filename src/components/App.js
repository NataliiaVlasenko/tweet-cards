import SiteBar from "../modules/Navigation/SiteBar";
import UserRoutes from "../UserRoutes";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <SiteBar />
      <UserRoutes />
      <ToastContainer/>
    </>
  );
}

export default App;
