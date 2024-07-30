import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;