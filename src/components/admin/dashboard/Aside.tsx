"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectAdmin } from "@/redux/slices/adminSlice";
import { Avatar } from "@mui/material";

interface AsideProps {
  className?: string;
}

export default function Aside(props: AsideProps) {
  const { className } = props;
  const admin = useAppSelector(selectAdmin);
  const profile = admin.staff?.profile;
  const staffName = admin.staff?.fullName !== "None None"
    ? admin.staff?.fullName
    : undefined;

  return (
    <aside
      className={`
      rounded-lg w-full px-3 flex flex-col items-center
      ${className}
    `}
    >
      <div
        className={`
          rounded-xl justify-center w-full p-5 flex flex-col
          items-center bg-black/10 aspect-video
        `}
      >
        <div className="p-1 rounded-full w-fit bg-white">
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={profile?.image?.url}
            alt={profile?.image?.description ?? ""}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-lg">{staffName}</p>
          <address className="text-black/70">{admin.staff?.email}</address>
        </div>
      </div>
    </aside>
  );
}
