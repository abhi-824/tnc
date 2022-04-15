import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer(props) {
  return (
    <div className="min-h-[200px] bg-gray-300 flex text-center items-start justify-center">
      <Link to="/">
        <img src={Logo} alt="Logo" className="max-h-[250px] " />
      </Link>
      <div className="text-left mt-10">
          <h1 className="text-2xl font-family-titan-one">Creators: </h1>
          <p className="text-md font-family-titan-one">Abhinandan Sharma (<a href="https://github.com/abhi-824" className="hover:text-gray-400 duration-300" target="_blank" rel="noopener noreferrer">GitHub</a>)</p>
          <p className="text-md font-family-titan-one">Aakash Kumar Singh (<a href="https://github.com/abhi-824" className="hover:text-gray-400 duration-300" target="_blank" rel="noopener noreferrer">GitHub</a>)</p>
      </div>
    </div>
  );
}
