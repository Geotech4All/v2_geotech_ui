import Link from "next/link";

export default function AuthSuccess() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div>
        <h1 className="font-bold text-3xl font-nunito">Sign Up <span className="text-green-600">success</span></h1>
        <Link className="text-violet-800 hover:text-violet-400 text-2xl transition" href="/signin">Sign In</Link>
      </div>
    </div>
  );
}
