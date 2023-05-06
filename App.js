import React, { useState } from 'react';


function NotesApp() {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
  
    function createNote() {
      if (editingIndex !== null) {
        editNote();
      } else {
        setNotes([...notes, currentNote]);
        setCurrentNote('');
      }
    }

    function editNote() {
        const updatedNotes = notes.map((note, index) =>
          index === editingIndex ? currentNote : note
        );
        setNotes(updatedNotes);
        setCurrentNote('');
        setEditingIndex(null);
      }

      function startEditing(index) {
        setCurrentNote(notes[index]);
        setEditingIndex(index);
      }

      function eraseNote(index) {
        const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
        setNotes(updatedNotes);
      }
}

export default NotesApp;