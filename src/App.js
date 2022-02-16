import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./router/routes";
import HomePage from "./pages/Home";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editar" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
