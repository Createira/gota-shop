import { Link } from "react-router-dom";
import errorImg from "../images/error-bg.png";
import errorText from "../images/error-text.png";

const ErrorPage = () => {
  return (
    <div className="error">
      <img className="error-text" src={errorText} alt="404 not found" />
      <img className="error-img" src={errorImg} alt="Error img" />
      <Link className="error-btn" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
