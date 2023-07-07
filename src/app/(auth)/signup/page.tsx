"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import Link from "next/link";
import { Button, CircularProgress } from "@mui/material";
import { useSignUpMutation } from "@/graphql/generated";
import { useRouter } from "next/navigation";
import { TransitionAlert } from "@/components/common";

type PasswordType = "password" | "text";

export default function SignUp() {
  const [{ fetching, error }, signUp] = useSignUpMutation();
  const [textType, setTextType] = React.useState<PasswordType>("password");
  const router = useRouter();

  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const pass1Ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const pass2Ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const toggleTextType = () => {
    if (textType === "text") {
      setTextType("password");
    } else {
      setTextType("text");
    }
  };

  const handleSignUp: React.FormEventHandler = (e) => {
    e.preventDefault();
    signUp({
      email: emailRef.current.value,
      password1: pass1Ref.current.value,
      password2: pass2Ref.current.value,
    }).then(res => {
      if (!res.error) {
        router.replace("/signup/success");
      }
    });
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="p-3 flex flex-col gap-3 items-center flex-1 justify-center"
    >
      <div className="max-w-lg w-full flex flex-col gap-7">
        {error && <TransitionAlert duration={1000} variant="error">{error.message}</TransitionAlert>}
        <div>
          <h1 className="font-bold font-nunito text-3xl">Welcome to Geotech</h1>
          <p className="flex items-center gap-1">
            Already have an account{" "}
            <Link
              className="text-violet-800 hover:text-violet-400 transition"
              href="#"
            >
              Sign In
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <TextField
            fullWidth
            size="small"
            type="email"
            label="Email"
            inputRef={emailRef}
            placeholder="example@gmail.com"
          />
          <div
            className={`
            p-1 border focus-within:shadow-lg focus-within:shadow-black/20
            transition rounded shadow flex items-center px-2
          `}
          >
            <input
              ref={pass1Ref}
              type={textType}
              placeholder="password"
              className="outline-none w-full p-1"
            />
            <button onClick={toggleTextType} type="button">
              {textType === "text" ? (
                <MdOutlineVisibilityOff />
              ) : (
                <MdOutlineVisibility />
              )}
            </button>
          </div>
          <div
            className={`
            p-1 border focus-within:shadow-lg focus-within:shadow-black/20
            transition rounded shadow flex items-center px-2
          `}
          >
            <input
              ref={pass2Ref}
              type={textType}
              placeholder="Confirm password"
              className="outline-none w-full p-1"
            />
            <button onClick={toggleTextType} type="button">
              {textType === "text" ? (
                <MdOutlineVisibilityOff />
              ) : (
                <MdOutlineVisibility />
              )}
            </button>
          </div>
        </div>
        <Button type="submit" className="bg-black" variant="contained">
          {fetching ? <CircularProgress /> : "Sign Up"}
        </Button>
      </div>
    </form>
  );
}
