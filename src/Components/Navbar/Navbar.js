import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import Cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Navbar(props) {
  function handleSearch(e){
    e.preventDefault();
  }
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <div className="pt-4">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              name=""
              id="search-query"
              className="mx-2 border-2 px-2"
              placeholder="Search for posters"
            />
          </form>
          <button>
            <img src={User} alt="profile pic" className="mx-2" />
          </button>
          <button>
            <img src={Cart} alt="cart" className="mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
