import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <div className="ErrorMsg">
      <h1>Error Page</h1>
      <p>404</p>
      <p>Usted será redireccionado en 3 segundos a la home page...</p>
    </div>
  );
};

export default ErrorPage;
