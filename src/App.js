import NotFound from "./components/notFound";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Customer from "./components/customers";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import Rental from "./components/rental";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Routes>
        <Route path="/movies/:id" element={<MovieForm />}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>
        <Route path="/customers" element={<Customer />}></Route>
        <Route path="/rentals" element={<Rental />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
        <Route path="/" element={<Navigate to="/movies" />}></Route>
      </Routes>
    </main>
  );
}

export default App;
