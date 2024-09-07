import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 w-full flex justify-between items-center  p-4 my-4 max-w-screen-xl">
      <div className="rounded-full flex justify-center items-center">
        <span className="font-holiday text-3xl">Criz</span>
      </div>

      <Button size="icon" variant="ghost">
        <Menu size={42} />
      </Button>
      {/* <nav>
        <ul className="flex justify-between items-center gap-4 ">
          <li className="text-base font-lovelo">About</li>
          <li className="text-base font-lovelo">Works</li>
          <li className="text-base font-lovelo">Blogs</li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
