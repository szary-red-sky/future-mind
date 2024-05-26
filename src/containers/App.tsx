import { NavLink, Route, Routes } from "react-router-dom";
import Movie from "./Movie";
import SearchResults from "./Search";

const App = () => {
  return (
    <>
      <header className="bg-slate-400 py-4  px-10 border-b-2">
        <NavLink to="/" className="rounded bg-blue-100 px-10 py-3">
          Home page
        </NavLink>
      </header>
      <div className="p-10 max-w-screen-xl m-auto">
        <Routes>
          <Route path="/" element={<SearchResults />} />
          <Route path="/details/:id" element={<Movie />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
