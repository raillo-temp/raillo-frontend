import HeaderBrand from "./HeaderBrand";
import HeaderActions from "./HeaderActions";
import { SidebarProvider } from "../Sidebar/SidebarContext";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
  return (
    <SidebarProvider>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            {/* 왼쪽: 로고와 브레드크럼 */}
            <HeaderBrand />
            {/* 오른쪽: 네비게이션과 카테고리 버튼 */}
            <HeaderActions />
          </div>
        </div>
      </header>
      <Sidebar />
    </SidebarProvider>
  );
}
