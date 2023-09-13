import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthResult from "./pages/AuthResult";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ListComponent></ListComponent>}></Route>
        <Route
          path="/event"
          element={<EventComponent></EventComponent>}
        ></Route>
        <Route
          path="/axios"
          element={<AxiosComponent></AxiosComponent>}
        ></Route>
        <Route path="/news" element={<NewsSearch></NewsSearch>}></Route> */}
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResult></AuthResult>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
