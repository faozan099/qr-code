import { Route, Routes } from "react-router-dom";
import Qr_codePage from "../pages/Qr_codePage";

const ROUTE_LIST = [
  {
    path: "/",
    element: <Qr_codePage />,
  }
];

const URL = () => {
  return (
    <Routes>
      {ROUTE_LIST.map((route, index) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default URL;
