"use client";
import { Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";

export default function Search() {
    return (
        <div className="w-full pl-3 rounded p-1 flex transition focus-within:shadow-black/30 shadow gap-3">
            <CiSearch />
            <input className="w-full outline-none" placeholder="Search Opportunity" type="text" />
            <Button size="small" className="whitespace-nowrap bg-green-600" variant="contained" color="success">Find</Button>
        </div>
    )
}
