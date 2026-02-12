type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h2 className="font-semibold text-4xl">Something went wrong ☕</h2>
      <p className="text-xl text-yellow">{message}</p>
    </div>
  );
}
