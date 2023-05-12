import { useState } from 'react'
import { NoteType } from '../staticComponents/Typings';


function Note () {
    const [note, setNote] = useState<NoteType>();
} // renderizar HTML y posteriormente enfocarme en la funcionalidad

export default Note;