import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

const MyPageBtn = () => {
  return (
    <Link href="/mypage">
      <Button variant="ghost" size="sm" className="flex items-center space-x-2">
        <User className="h-4 w-4" />
        <span>마이페이지</span>
      </Button>
    </Link>
  );
};

export default MyPageBtn;
