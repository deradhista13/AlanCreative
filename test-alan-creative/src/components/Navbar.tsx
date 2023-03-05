import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar bg-[#00ACEE] w-full">
      <a className="btn btn-ghost normal-case text-xl text-white px-10">
        Alan Resto
      </a>
    </div>
  );
};

export const Menu = () => {
  return (
    <div className="tabs flex justify-start w-full shadow-lg px-10 pt-5 space-x-5">
      <Link to="/food" className="tab tab-bordered">
        Food
      </Link>
      <Link to="/" className="tab tab-bordered">
        Transaksi
      </Link>
    </div>
  );
};
