"use client";
import { useContext, useState } from "react";
import { NoteDataContext } from "./NoteEditor";

export const NoteCard = ({ index, content }) => {
  const [newContent, setNewContent] = useState(content);
  const { deleteNotes, updateNotes } = useContext(NoteDataContext);

  const handleUpdate = () => {
    updateNotes(index, newContent);
    setNewContent("");
  };
  return (
    <div className="bg-cyan-400 p-4 rounded-xl h-fit">
      <textarea onChange={(e) => setNewContent(e.target.value)} value={newContent || content} className="w-full h-[220px] bg-transparent focus:outline-none" />
      <div className="space-x-2">
        <button className="btnPrimary" onClick={handleUpdate}>
          Update
        </button>
        <button className="btnDanger" onClick={() => deleteNotes(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};
