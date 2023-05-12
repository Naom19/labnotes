import { useState } from 'react'
import logo from '../../../images/edit.png';
import logoG from '../../../images/edit-green.png';
import logoF from '../../../images/paperclip-regular-24.png';
import logoS from '../../../images/share-alt-regular-24.png';
import logoT from '../../../images/trash-alt-regular-24.png';
import { NoteType } from '../staticComponents/Typings';



// crear nuevo componente que sólo cree el input 

function Page() {
  const [notes, setNotes] = useState<NoteType[]>([]); // Array de notas
  const [currentNote, setCurrentNote] = useState<string>(''); 
  // current note es la nota que actualmente se está editando
  // <string> es una anotación de typescript para especificar que useState está destinado a almacenar un valor de string (Hook)
  const [editingIndex, setEditingIndex] = useState<number | undefined>(); 
  // tomamos el indíce de la nota para la edición, se utiliza undefined para cuando la nota no se está editando

  // Crear una nueva variable editingNote
  // const [editingNote, setEditingNotes] = useState<NoteType[]>([]);

  const [iconSrc, setIconSrc] = useState<string>('../../../images/edit.png');


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

    // fx para cambiar el color del icono al editar
    function handleEditBtnClick(index: number) {
      startEditing(index);
      setIconSrc('../../../images/edit-green.png');
    }

    function eraseNote(index: number) {
      const updatedNotes = notes.filter((_, noteIndex) => noteIndex !== index);
      setNotes(updatedNotes);
    }

    return (
      <div>
        <input
          type="text"
          value={currentNote} // mejorar cómo se enlazan create, edit y currentNote (solo con el arreglo de notas)
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your note here"
          className='noteInput'
        />
        <button onClick={createNote} className='buttonCreateNote'>
          {editingIndex !== null && editingIndex !== undefined
          ? 'Update Note' 
          : 'Create Note'}
        </button>
        <ul className='ulList'> 
          {notes.map((note, index) => (
            <li key={index} className='noteWroten'>
              {note.isEditing ? (
                <input
                  type='text'
                  value={currentNote}// tempText
                  onChange={(e) => setCurrentNote(e.target.value)} // debe actualizar el atributo tempText del note
                  placeholder='Write your note here'
                  className='noteInputL'
                />
              ) : (
                note.text
              )} 
            
            {note.isEditing ? (
              <button onClick={() => startEditing(index)} className='buttonEditNote'>//  tempTExt == text
                <img src={logo} alt='edit' />
                Edit
              </button>)  : (
                <button onClick={() => endEditing(index)} className='buttonEditNote'> // debe reemplazar el atributo text por lo que hay que en tempTExt
                <img src={logo} alt='edit' />
                Save
              </button>
              )} 
              {/* <button onClick={() => handleEditBtnClick(index)} className='buttonEditNote'>
                <img src={iconSrc} alt='edit' />
                Edit
              </button> */}

              <button className='buttonFile'>
              <img src={logoF} alt='add file' />
              </button>
              <button className='buttonShare'>
              <img src={logoS} alt='share' />
              </button>
              <button onClick={() => eraseNote(index)} className='buttonEraseNote'>
              <img src={logoT} alt='trash' />
                Erase
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Page;