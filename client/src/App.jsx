import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Pages/Movie";
import CreateMovie from "./Pages/CreateMovie";
import UpdateMovie from "./Pages/UpdateMovie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie />}></Route>
          <Route path="/create" element={<CreateMovie />}></Route>
          <Route path="/getmovie/:id" element={<UpdateMovie />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
