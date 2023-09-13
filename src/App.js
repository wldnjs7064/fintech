import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import EventComponent from "./components/EventComponent";
import AxiosComponent from "./components/AxiosComponent";
import NewsSearch from "./pages/NewsSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListComponent></ListComponent>}></Route>
        <Route
          path="/event"
          element={<EventComponent></EventComponent>}
        ></Route>
        <Route
          path="/axios"
          element={<AxiosComponent></AxiosComponent>}
        ></Route>
        <Route path="/news" element={<NewsSearch></NewsSearch>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
