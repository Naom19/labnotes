// archivo para importar y exportar las interfaces y el tipado

 export type NoteType = { // voy a recibir esto como prop dentro del componente Note
    text: string
    isEditing: boolean
  }; 

  export type NbProps = { 
    logo: string;
    buttonLabels: ButtonLabel[];
  }; // Update the NbProps type to use ButtonLabel[]

  
export type ButtonLabel = {
  label: string; // because of the URL
  className: string; 
}; // Defines type for the button labels

