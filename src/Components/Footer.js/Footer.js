import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer(props) {
  return (
    <div className="min-h-[200px] bg-gray-300 flex text-center items-start justify-center">
      <Link to="/">
        <img src={Logo} alt="Logo" className="max-h-[250px] " />
      </Link>
    </div>
  );
}
