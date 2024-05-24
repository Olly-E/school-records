import { Button } from "@/app/components/elements/Button";
import React from "react";

interface HeaderProp {
  title: string;
  action?: () => void;
  actionTitle?: string;
}
const Header = ({ title, action, actionTitle }: HeaderProp) => {
  return (
    <div className="bg-white border-b-gray-200 border-b h-[70px] px-6 w-full flex items-center justify-between">
      <h1 className="text-head-200 font-bold">{title}</h1>
      {action && (
        <Button onClick={action} type="button">
          {actionTitle}
        </Button>
      )}
    </div>
  );
};

export default Header;
