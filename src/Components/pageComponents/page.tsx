import { useState } from 'react'

type NoteType = {
  text: string
  isEditing: boolean
};

function Page() {
  const [notes, setNotes] = useState<NoteType[]>([]); // Array de notas
  const [currentNote, setCurrentNote] = useState<string>(''); 
  // current note es la nota que actualmente se está editando
  // <string> es una anotación de typescript para especificar que useState está destinado a almacenar un valor de string (Hook)
  const [editingIndex, setEditingIndex] = useState<number | undefined>(); 
  // tomamos el indíce de la nota para la edición, se utiliza undefined para cuando la nota no se está editando

  function createNote() { // Revisa si se está editando la nota, en caso de ser cierto llama editNote
    if (editingIndex !== null && editingIndex !== undefined) {
      editNote();
    } else {
      setNotes([...notes, { text: currentNote, isEditing: false }]);
      setCurrentNote(''); // en caso de ser falso, agrega una nueva nota con el texto actual, isEditing es false y resetea currentNote
    }
  }

  function editNote() {
      const updatedNotes = notes.map((note, index) => //Indicar en typescript en REACT que es de tipo array mover a otro componente
        index === editingIndex ? { text: currentNote, isEditing: false } : note
      ); // crea un nuevo array donde la nota reemplaza editingIndex con una nueva nota que contiene el texto actual y coloca isEditing a false
      setNotes(updatedNotes);
      setCurrentNote('');
      setEditingIndex(undefined);
    } // Las demás notas no se cambian, luego se establece el nuevo array como el nuevo estado para notes y 'limpia' currentNote y editingIndex
    
    function startEditing(index: number) { // crea un nuevo array donde la nota con el index tiene isEditing true se actualiza
      const updatedNotes = notes.map((note, i) =>
        i === index ? { ...note, isEditing:true } : note
        );
        setNotes(updatedNotes);
    }

    function eraseNote(index: number) {
      const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
      setNotes(updatedNotes);
    }

    return (
      <div>
        <input
          type="text"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your note here"
          className='noteInput'
        />
        <button onClick={createNote} className='buttonCreateNote'>
          {editingIndex !== null && editingIndex !== undefined
          ? 'Update Note' 
          : 'Create Note'}
        </button>
        <ul>
          {notes.map((note, index) => (
            <li key={index} className='noteWroten'>
              {note.isEditing ? (
                <input
                  type='text'
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  placeholder='Write your note here'
                  className='noteInputL'
                />
              ) : (
                note.text
              )}
              <button onClick={() => startEditing(index)} className='buttonEditNote'>
                Edit Note
              </button>
              <button onClick={() => eraseNote(index)} className='buttonEraseNote'>
                Erase Note
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Page;