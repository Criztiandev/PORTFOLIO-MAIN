const Header = () => {
  return (
    <header className="absolute top-0 w-full flex justify-between  p-4 my-4 max-w-screen-xl">
      <div className="size-[48px] rounded-full flex justify-center items-center">
        <span className="font-lovelo text-4xl">C</span>
      </div>

      <nav>
        <ul className="flex justify-between items-center gap-4 ">
          <li className="text-base font-lovelo">About</li>
          <li className="text-base font-lovelo">Works</li>
          <li className="text-base font-lovelo">Blogs</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
