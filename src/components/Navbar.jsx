import { navigation } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex flex-row items-center justify-between px-5 lg:px-7.5 xl:px-10">
        <a href="#" className="flex items-center p-5 gap-2">
          <img
            src="./src/assets/images/logo.svg"
            alt="logo"
            width={36}
            height={36}
          />
          <p className="font-code font-semibold text-2xl">UW.ID</p>
        </a>

        <nav className="flex max-md:hidden">
          <div className="flex gap-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="border rounded-full py-1 px-5 font-grotesk"
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a href="#" className="md:hidden">
          <img
            src="./src/assets/images/hamburger.svg"
            alt="menu"
            width={36}
            height={36}
          />
        </a>
      </div>

      <div></div>
    </header>
  );
};

export default Navbar;
