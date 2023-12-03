"use client";

import { Header } from "./Header";
import { NoteCard } from "./NoteCard";
import { createContext, useEffect, useState } from "react";

export const NoteDataContext = createContext();

export const NoteEditor = () => {
  const [notes, setNotes] = useState([]); //immutable (tidak bisa langsung dirubah)

  const addNote = () => {
    const newNotes = [...notes];
    newNotes.push({ content: "" });
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const deleteNotes = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const updateNotes = (index, newContent) => {
    const newNotes = [...notes];
    newNotes[index].content = newContent;
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  });

  return (
    <NoteDataContext.Provider value={{ notes, addNote, deleteNotes, updateNotes }}>
      <Header />
      <section className="grid grid-cols-4 gap-6">
        {notes.map(({ content }, index) => {
          return <NoteCard key={index} index={index} content={content} />;
        })}
      </section>
    </NoteDataContext.Provider>
  );
};
