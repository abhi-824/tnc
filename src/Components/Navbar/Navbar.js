import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import Cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    navigate("/search/" + e.target["searchBarText"].value);
  }
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <div className="pt-4">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="max-h-[100px]" />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              name="searchBarText"
              id="search-query"
              className="mx-2 border-2 px-2"
              placeholder="Search for posters"
            />
          </form>
          <button>
            <img src={User} alt="profile pic" className="mx-2" />
          </button>
          <Link to="/cart">
            <button>
              <img src={Cart} alt="cart" className="mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
