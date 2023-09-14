import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthResult from "./pages/AuthResult";
import MainPage from "./pages/MainPage";
import AccountList from "./pages/AccountList";
import Balance from "./pages/Balance";
import QrCode from "./pages/QrCode";
import QrReader from "./pages/QrReader";
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
        <Route path="/list" element={<AccountList />}></Route>
        <Route path="/balance" element={<Balance />}></Route>
        <Route path="/qrcode" element={<QrCode />}></Route>
        <Route path="/qrreader" element={<QrReader />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
