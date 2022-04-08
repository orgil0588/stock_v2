import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full z-10 bg-white px-10">
      <ul className="flex space-x-4 py-4 border-b text-sm">
        <li>
          <Link href="/">
            <a>Эхлэл</a>
          </Link>
        </li>
        <li>
          <Link href="/mse_stock_list">
            <a>Дотоодын хувьцаа</a>
          </Link>
        </li>
        <li>
          <Link href="/heatmap">
            <a>Төвлөрөлийн зураглал</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
