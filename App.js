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


}

export default NotesApp;