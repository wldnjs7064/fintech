import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import EventComponent from "./components/EventComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListComponent></ListComponent>}></Route>
        <Route
          path="/event"
          element={<EventComponent></EventComponent>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
