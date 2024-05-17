import Root from "@/pages/Root";
import TestPage from "@/pages/TestPage";
import { Route, createRoutesFromElements } from "react-router-dom";

const appRoutes = createRoutesFromElements(
  <Route element={<Root />}>
    <Route index element={<TestPage />} />
  </Route>
);

export default appRoutes;
