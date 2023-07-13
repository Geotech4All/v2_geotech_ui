"use client";

import { useRouter } from "next/navigation";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  const { error, reset } = props;
  const router = useRouter();
  const resetError = () => {
    reset();
    router.refresh();
  };
  
  return (
    <div className="flex flex-col items-center">
      <div
        className={`
          w-full items-center justify-center flex flex-col
          bg-red-50/30 rounded-lg border border-red-400/50
          m-2 min-h-[50vh] gap-3 font-nunito max-w-md self-center
        `}
      >
        <h2 className="font-bold text-2xl">Something went wrong!</h2>
        <div className="flex gap-1 flex-col items-center font-medium">
          <p className="text-red-600 text-center text-lg">{error.message}</p>
          <button onClick={resetError} className={`
              bg-blue-700 p-1 rounded text-white px-4
              hover:bg-blue-800 active:bg-blue-800 transition
            `}>Reload</button>
        </div>
      </div>
    </div>
  );
}
