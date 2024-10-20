import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type Props = {
  message?: string;
};

function FormError({ message }: Props) {
  if (!message) return null;

  return (
    <div className="bg-red-100 dark:bg-red-800/50 flex items-center gap-x-2 p-3 rounded-md text-sm text-red-600 dark:text-red-400">
      <ExclamationTriangleIcon className="h-4 w-4 text-red-600 dark:text-red-400" />
      <span>{message}</span>
    </div>
  );
}

export default FormError;
