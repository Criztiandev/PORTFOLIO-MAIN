const Header = () => {
  return (
    <header className="absolute top-0 w-full flex justify-between items-center p-4 max-w-screen-xl">
      <div className="size-[48px] border border-black rounded-full"></div>

      <nav>
        <ul className="flex justify-between items-center gap-4">
          <li className="text-[18px] font-lovelo">About</li>
          <li className="text-[18px] font-lovelo">Works</li>
          <li className="text-[18px] font-lovelo">Blog</li>
          <li className="text-[18px] font-lovelo">Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
