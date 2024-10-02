"use client";


import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn() {
  const router = useRouter();
 

  return (
    <button onClick="" className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}