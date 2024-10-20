import { CheckCircledIcon } from "@radix-ui/react-icons";

type Props = {
  message?: string;
};

function FormSuccess({ message }: Props) {
  if (!message) return null;

  return (
    <div className="bg-emerald-100 dark:bg-emerald-800/50 flex items-center gap-x-2 p-3 rounded-md text-sm text-emerald-600 dark:text-emerald-400">
      <CheckCircledIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      <span>{message}</span>
    </div>
  );
}

export default FormSuccess;
