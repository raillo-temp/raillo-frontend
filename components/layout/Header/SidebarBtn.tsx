"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useSidebar } from "../Sidebar/SidebarContext";

const SidebarBtn = () => {
  const { open } = useSidebar();

  return (
    <Button variant="ghost" size="sm" onClick={open}>
      <Menu className="h-5 w-5" />
    </Button>
  );
};

export default SidebarBtn;
