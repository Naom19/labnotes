import { useState } from 'react'

type NoteType = string;

function Page() {
  const [notes, setNotes] = useState<NoteType[]>([]); // Array de notas
  const [currentNote, setCurrentNote] = useState<NoteType>(''); // current note es la nota que actualmente se está editando 
  const [editingIndex, setEditingIndex] = useState<number | undefined>(); 
  // tomamos el indíce de la nota para la edición, se utiliza undefined para cuando la nota no se está editando

  function createNote() {
    if (editingIndex !== null && editingIndex !== undefined) {
      editNote();
    } else {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  }

  function editNote() {
      const updatedNotes = notes.map((note, index) => //Indicar en typescript en REACT que es de tipo array mover a otro componente
        index === editingIndex ? currentNote : note
      );
      setNotes(updatedNotes);
      setCurrentNote('');
      setEditingIndex(undefined);
    }

    function startEditing(index: number) {
      setCurrentNote(notes[index]);
      setEditingIndex(index);
    }

    function eraseNote(index: number) {
      const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
      setNotes(updatedNotes);
    }

    return (
      <div>
        <h1 className='mainTitle'>LabNotes</h1>
        <input
          type="text"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your note here"
        />
        <button onClick={createNote}>
          {editingIndex !== null && editingIndex !== undefined
          ? 'Update Note' 
          : 'Create Note'}
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

export default Page;