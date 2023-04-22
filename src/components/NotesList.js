import NotesItem from "./NotesItem";

function NotesList({ notes }) {
  return (
    <div className="notes_list">
      {notes.map((note) => (
        <NotesItem key={note.id} date={note.createdAt} {...note} />
      ))}
    </div>
  );
}

export default NotesList;
