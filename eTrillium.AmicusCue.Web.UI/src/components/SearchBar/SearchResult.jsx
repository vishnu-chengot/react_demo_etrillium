import "./SearchResult.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage.jsx";

export const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login-page");
  }

  return (
    <>
      <div className="search-result" onClick={handleClick}>
        {result}
      </div>

      <Routes>
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </>
  );
};
