import { navigation } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full lg:bg-n-8/90 px-5 py-5">
      <div className="flex flex-row items-center justify-between lg:px-7.5 xl:px-10">
        <a href="#" className="flex items-center gap-2">
          <img
            src="./src/assets/images/logo.svg"
            alt="logo"
            width={36}
            height={36}
          />
          <p className="font-code font-semibold text-2xl">DANGO.</p>
        </a>

        <nav className="flex max-md:hidden">
          <div className="flex gap-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="border rounded-full py-1 px-5 font-grotesk hover:bg-yellow transition-all"
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
    </header>
  );
};

export default Navbar;
