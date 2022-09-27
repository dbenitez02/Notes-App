import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "8/6/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "8/6/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "8/6/2022",
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "8/6/2022",
    },

]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));

    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {

  const date = new Date();
  // Create a new note after passing the {text} from AddNote.js and save current date and generate a new id.
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  };

  // Copy current array and then add new note at the end.
  const newNotes = [...notes, newNote];
  // Update the state with new note
  setNotes(newNotes)


  }

  const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);

  setNotes(newNotes);
}
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/> 
      </div>
    </div>
  );
}

export default App;
