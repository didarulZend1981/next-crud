"use client";


import { useRouter } from "next/navigation";

export default function EditTopicForm() {


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        // onChange={(e) => setNewTitle(e.target.value)}
        value=""
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        // onChange={(e) => setNewDescription(e.target.value)}
        value=""
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}