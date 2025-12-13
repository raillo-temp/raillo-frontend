import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartBtn = () => {
  return (
    <Link href="/cart">
      <Button variant="ghost" size="sm" className="flex items-center space-x-2">
        <ShoppingCart className="h-4 w-4" />
        <span>장바구니</span>
      </Button>
    </Link>
  );
};

export default CartBtn;
