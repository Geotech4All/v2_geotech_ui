"use client";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import React from "react";
import { useAdminSignInMutation } from "@/graphql/generated";
import { useRouter } from "next/navigation";
import { ErrorAlert } from "@/components/common";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slices/userSlice";
import { setTokens } from "@/utils/token";

export default function AdminSignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [{ fetching }, signIn] = useAdminSignInMutation();
  const [loginError, setLoginError] = React.useState<any>();
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const dispatch = useAppDispatch();
  const router = useRouter();

  const toggleShowPassword = () => setShowPassword((curr) => !curr);

  const handleSignIn: React.FormEventHandler = (e) => {
    e.preventDefault();
    signIn({
      email: emailRef.current.value,
      password: passRef.current.value,
    }).then((res) => {
      if (res.data?.tokenAuth?.success === true) {
        // Set the current logged in user
        dispatch(setUser(res.data.tokenAuth.user))

        // Update the user's tokens
        const token = res.data.tokenAuth.token ?? ""
        const refreshToken = res.data.tokenAuth.refreshToken ?? ""
        setTokens(token, refreshToken);

        // Send the user to the admin dashboard
        router.replace("/admin/dashboard");
      } else {
        setLoginError(res.data?.tokenAuth?.errors)
        if (typeof window !== "undefined") {
          localStorage.clear()
        }
      }
    });
  };

  return (
    <div className="flex-1 p-4 flex items-center min-h-screen max-h-screen justify-center flex-col">
      <div className="w-full flex flex-col gap-6 font-nunito max-w-xl">
        <div className="text-xl">
          <h1 className="font-extrabold text-4xl">Welcome Back</h1>
          <p>
            Don&apos;t have an account?{" "}
            <Link
              className="text-violet-800 hover:text-violet-400 transition"
              href="/signin"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <form onSubmit={handleSignIn} className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            {loginError && <ErrorAlert error={loginError} />}
            <TextField
              fullWidth
              size="small"
              type="email"
              label="Email"
              inputRef={emailRef}
              placeholder="example@gmail.com"
            />
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                size="small"
                inputRef={passRef}
                placeholder="********"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      onMouseDown={toggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <Button variant="contained" className="bg-black" type="submit">
            {fetching ? <CircularProgress /> : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
