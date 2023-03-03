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
      <a className="tab tab-bordered">Food</a>
      <a className="tab tab-bordered tab-active">Transaksi</a>
    </div>
  );
};
