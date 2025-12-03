import { Button } from "@/components/ui/button";
import HeaderAuthBtn from "./HeaderAuthBtn";
import { Menu } from "lucide-react";
import CartBtn from "./CartBtn";

const HeaderActions = () => {
  return (
    <div className="flex items-center space-x-4 ml-auto">
      <nav className="hidden md:flex items-center space-x-4">
        <HeaderAuthBtn />
        <CartBtn />
      </nav>
      {/* 카테고리 메뉴 버튼 */}
      <Button
        variant="ghost"
        size="sm" /*onClick={() => setShowSidebar(true)}*/
      >
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default HeaderActions;
