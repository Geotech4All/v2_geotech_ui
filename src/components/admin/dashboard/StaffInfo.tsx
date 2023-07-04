"use client";

import { DateTime } from "@/components/common";
import { useAppSelector } from "@/redux/hooks";
import { selectAdmin } from "@/redux/slices/adminSlice";

export default function StaffInfo() {
  const admin = useAppSelector(selectAdmin);
  const staffName = admin.staff?.fullName?.split(" ")[0];
  const staffGreeting = staffName !== "None" ? `Hello, ${staffName}` : "Hello";
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full items-start justify-between">
      <div>
        <h1 className="text-4xl md:text-6xl my-3 font-extrabold">
          {staffGreeting}
        </h1>
        <p className="md:text-xl text-black/70 font-medium">
          Track team progress and user interaction.
        </p>
      </div>
      <DateTime size="lg" dateTime={admin.staff?.dateJoined} icon/>
    </div>
  );
}
