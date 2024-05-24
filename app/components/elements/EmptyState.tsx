import React from "react";
import { Button } from "./Button";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonTitle: string;
  action: () => void;
  icon?: React.ReactNode;
}
const EmptyState = ({
  title,
  description,
  buttonTitle,
  action,
  icon,
}: EmptyStateProps) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div>
        <div className="flex justify-center mb-6">{icon}</div>
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="text-center">{description}</p>
        <Button type="button" className="mt-6 mx-auto" onClick={action}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
