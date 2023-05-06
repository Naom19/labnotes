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

      return (
        <div>
          <h1>Notes App</h1>
          <input
            type="text"
            value={currentNote}
            onChange={(e) => setCurrentNote(e.target.value)}
            placeholder="Write your note here"
          />
          <button onClick={createNote}>
            {editingIndex !== null ? 'Update Note' : 'Create Note'}
          </button>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>
                {note}
                <button onClick={() => startEditing(index)}>Edit Note</button>
                <button onClick={() => eraseNote(index)}>Erase Note</button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default NotesApp;