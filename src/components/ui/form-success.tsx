import { CircleCheckBig } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-primary/15 p-3 rounded-lg flex items-center gap-x-2 text-sm text-primary-500">
      <CircleCheckBig className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
