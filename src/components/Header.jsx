"use client";

import { useContext } from "react";
import { NoteDataContext } from "./NoteEditor";

export const Header = () => {
  const { addNote } = useContext(NoteDataContext);
  return (
    <div className="flex justify-between">
      <div className="font-bold tracking-tight text-xl text-white">NotesMe</div>
      <button onClick={addNote} className="w-8 h-8 bg-emerald-400 flex justify-center items-center rounded-full">
        +
      </button>
    </div>
  );
};
